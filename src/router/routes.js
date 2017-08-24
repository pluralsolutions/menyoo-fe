import Home from '@/components/Home';
import Profile from '@/components/Profile';
import Startup from '@/components/Startup';
import Authentication from '@/components/Authentication';

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
    path: '/home',
    titulo: 'Home',
    component: Home,
  },
  {
    path: '/pedidos/acompanhar',
    component: () => import('../components/AwaitingOrder'),
  },
  {
    path: '/perfil',
    name: 'usuario',
    titulo: 'Profile',
    component: Profile,
  },
];

export default routes;
