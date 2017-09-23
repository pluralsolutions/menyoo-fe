import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history',
});

// router.beforeEach((to, from, next) => {
//   const requireAuth = !to.matched.some(record => record.meta.noAuth);
//   let redirectTo = { };
//   const haveIACookie = Vue.cookie.get('token');
//   if (requireAuth && haveIACookie && !store.getters.isLoggedUser) {
//     store.dispatch('fetchUser').then(() => { },
//     // on error
//     () => router.push('/entrar'));
//   }
//   if (requireAuth && !haveIACookie) {
//     redirectTo = { path: '/entrar', query: { redirect: to.fullPath } };
//   } else if (haveIACookie && (to.path === '/entrar' || to.path === '/index.html')) {
//     redirectTo = { path: to.query.redirect || '/restaurantes/bar-do-ze' };
//   }
//   // eslint-disable-next-line
//   console.log('to.fullPath', to.fullPath, to.path);
//   // eslint-disable-next-line
//   console.log('redirectTo', redirectTo);
//   return next(redirectTo);
// });

export default router;
