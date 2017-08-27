import Menu from '@/components/Menu';
import Profile from '@/components/Profile';
import Startup from '@/components/Startup';
import Authentication from '@/components/Authentication';
import ProductDetails from '@/components/ProductDetails';

const routes = [
  {
    path: '/',
    component: Startup,
    meta: { noAuth: true },
  },
  {
    path: '/entrar',
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
    path: '/perfil',
    name: 'usuario',
    component: Profile,
  },
];

export default routes;
