// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.axios = axios;
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter)
Vue.use(Vuex);
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */

router.beforeEach((to,from,next)=>{
  let isLogin  = sessionStorage.getItem('isLogin');

  if(to.path == '/logout'){
    sessionStorage.clear();
    next({path:'/login'})
  }else if(to.path =='/login'){
    if(isLogin!=null){
      next({path:'/main'})
    }else if(isLogin ==null){
      next({path:'/login'})
    }
  }

  next();
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
