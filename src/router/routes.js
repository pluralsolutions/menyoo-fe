import Auth from '@/components/Auth';
import Menu from '@/components/Menu';
import Review from '@/components/Review';
import Profile from '@/components/Profile';
import Startup from '@/components/Startup';
import ProductDetails from '@/components/ProductDetails';
import AwaitingOrder from '@/components/AwaitingOrder';
import Payment from '@/components/Payment';
import Checkout from '@/components/Checkout';

const routes = [
  { path: '/', component: Startup, meta: { noAuth: true } },
  { path: '/auth', component: Auth, meta: { noAuth: true } },
  {
    path: '/restaurantes/:name',
    name: 'menu',
    component: Menu,
  },
  {
    path: '/restaurantes/:name/reviews',
    name: 'reviews',
    component: Review,
  },
  {
    name: 'produtos',
    path: '/produtos/:id',
    component: ProductDetails,
  },
  {
    name: 'awaiting-order',
    path: '/pedidos/:orderId?/acompanhar',
    component: AwaitingOrder,
    props: true, // inject all params to props on component
    // props: (route) => ({ orderId: route.params.orderId })
  },
  {
    path: '/pedidos/:orderId/pagar',
    name: 'pay-order',
    component: Payment,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/perfil',
    component: Profile,
  },
  { path: '*', component: Startup, meta: { noAuth: true } },
];

export default routes;
