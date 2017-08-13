import Home from '@/components/Home';
import Profile from '@/components/Profile';
import Startup from '@/components/Startup';
import Authentication from '@/components/Authentication';

const routes = [
  {
    path: '/',
    component: Startup,
    disableHeader: true,
  },
  {
    path: '/home',
    name: 'Home',
    titulo: 'Home',
    component: Home,
    exibir: true,
  },
  {
    path: '/usuario',
    name: 'usuario',
    titulo: 'Profile',
    component: Profile,
    exibir: true,
  },
  {
    path: '/entrar',
    component: Authentication,
    disableHeader: true,
  },
];

export default routes;
