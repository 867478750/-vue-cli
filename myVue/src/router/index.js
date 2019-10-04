import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import main from "../views/main"
import name from '../views/name'
import password from "../views/password";
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: main,
      children:[
        {
          path:'/main/name/:id',
          name:'iame',
          component: name,
          props:true

        },
        {
          path: '/main/password',
          name: 'password',
          component: password
        }
      ]
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      component: Login
    }
  ]
})
