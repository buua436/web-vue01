import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import shoppingcart from '@/components/shoppingCart';
import login from '@/components/login';
import register from '@/components/register';
import order from '@/components/order';
import pay from '@/components/pay';
import good from '@/components/good';
import search from '@/components/search';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
    }, {
      path: '/shoppingcart',
      name: 'ShoppingCart',
      component: shoppingcart,
    }, {
      path: '/login',
      name: 'Login',
      component: login,
    }, {
      path: '/register',
      name: 'Register',
      component: register,
    }, {
      path: '/order',
      name: 'Order',
      component: order,
    }, {
      path: '/pay',
      name: 'Pay',
      component: pay,
    }, {
      path: '/good/:id',
      name: 'Good',
      component: good,
    }, {
      path: '/search/:searchinf',
      name: 'Search',
      component: search,
    },

  ],
});
