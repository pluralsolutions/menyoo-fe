import Home from '@/components/Home';
import Profile from '@/components/Profile';
import Startup from '@/components/Startup';
import Authentication from '@/components/Authentication';

const routes = [
  {
    path: '/',
    component: Startup,
  },
  {
    path: '/home',
    titulo: 'Home',
    component: Home,
  },
  {
    path: '/perfil',
    name: 'usuario',
    titulo: 'Profile',
    component: Profile,
  },
  {
    path: '/entrar',
    component: Authentication,
  },
];

export default routes;
