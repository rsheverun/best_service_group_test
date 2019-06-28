
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import axios from 'axios'
import Vuex from 'vuex'
import router from './router/index'
import App from './components/App'
import 'es6-promise/auto'
import miniToastr from 'mini-toastr'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});
Vue.use(Vuex)

miniToastr.init()

Vue.prototype.axios = axios;
Vue.prototype.miniToastr = miniToastr;

axios.defaults.headers.common = {
  'Authorization': 'Bearer ' + localStorage.getItem('token')
};
const user = {
  state: {
    token: '',
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + token
      };
      localStorage.setItem('token', token)
      router.push({name: 'Dashboard'})
    },
    removeToken(state, message) {
      state.token = ''
      localStorage.removeItem('token')
      miniToastr.success(message)
      router.push({name: 'Login'})
    }
  },
  actions: {
    login(context, data) {
      axios.post('api/login', {
        email: data.email,
        password: data.password,
        username: data.username
      }) .then(response => {
        if (response.status == 200)
          context.commit('setToken', response.data.token)
      })
      .catch(error => {
        console.log(error.response.status)
            if (error.response.status == 422) {
              let errors = error.response.data.errors
              console.log(error.response.data.errors)
              for (var item in errors) {
                console.log(item, errors)
                for (var i in errors[item]) {
                  miniToastr.error(errors[item][i], 'Error')
                }
              }
            } else {
              miniToastr.error(error.response.data.message)
            }
      })
    },
    logout(context,data) {
      axios.post('api/logout')
        .then(response => {
          if (response.status == 200) {
            context.commit('removeToken', response.data.message)
          }
        }) .catch(error => {
            miniToastr.error(error.response.data.message)
        })
    }
  }
}
const category = {
  state: {
    list: ''
  },
  mutations: {
    setCategories (state, categories) {
      state.list = categories
    },
  },
  actions: {
    getCategories (context) {
      axios.get('api/get/categories')
          .then(response => {
              if (response.status == 200)
                  context.commit('setCategories', response.data)
          })
          .catch(error => {
            miniToastr.error(error.response.data.message)
          })
    },
  }
}

const actor = {
  state: {
    list: '',
    count: ''
  },
  mutations: {
    setActors (state, actors) {
      state.count = actors.count
      state.list = actors.list
    },
  },
  actions: {
    getActorsFromCategory (context, data) {
      axios.post('api/get/actors',{
          category_id: data.selectedCategory,
          page: data.page,
          perPage: data.perPage,
      })
      .then(response => {
          if (response.status == 200)
              context.commit('setActors', response.data)
          })
      .catch(error => {
            miniToastr.error(error.response.data.message)
        })
    }
  }
}

const store = new Vuex.Store({
    modules: {
      actor: actor,
      user: user,
      category: category
    },
    state: {
      categories: '',
      isLoading: true //for spinner
    },
})
  router.beforeEach((to, from, next) => {
    const publicPages = [
      'Login',
    ]
    const protectedPages = [
      'Dashboard'
    ]
  
    let authRequired = !publicPages.includes(to.name);
    let token =localStorage.getItem('token')
    if (!token && authRequired)
      return next('/login');
    
    if (to.name == 'Login' && token)
      return next('/dashboard')
    next();
  })

const app = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
});

