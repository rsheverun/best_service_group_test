
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

Vue.use(Vuex)

Vue.prototype.axios = axios;
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const store = new Vuex.Store({
    state: {
      categories: '',
      actors: '',
      isLoading: true
    },
    mutations: {
      setCategories (state, categories) {
        state.categories = categories
      },
      setActors (state, actors) {
        state.actors = actors
      },
    },
    actions: {
        getCategories (context) {
            axios.get('api/get/categories')
                .then(response => {
                    if (response.status == 200)
                        context.commit('setCategories', response.data)
                })
        },

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
        },
    }
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
