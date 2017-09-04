import Menu from '@/components/Menu';
import Profile from '@/components/Profile';
import Startup from '@/components/Startup';
import Authentication from '@/components/Authentication';
import ProductDetails from '@/components/ProductDetails';
import Checkout from '@/components/Checkout';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Startup,
    meta: { noAuth: true },
  },
  {
    path: '/entrar',
    name: 'auth',
    component: Authentication,
    meta: { noAuth: true },
  },
  {
    path: '/restaurantes/:name',
    name: 'menu',
    component: Menu,
  },
  {
    name: 'produtos',
    path: '/produtos/:id',
    component: ProductDetails,
  },
  {
    name: 'awaiting-order',
    path: '/pedidos/acompanhar',
    component: () => import('../components/AwaitingOrder'),
  },
  {
    path: '/order/pay',
    name: 'pay-order',
    component: Menu,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/perfil',
    name: 'usuario',
    component: Profile,
  },
];

export default routes;
