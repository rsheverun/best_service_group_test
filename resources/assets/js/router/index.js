import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Login = () => System.import('../components/LoginComponent.vue')
const Dashboard = () => System.import('../components/DashboardComponent.vue')

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        }
    ]
})