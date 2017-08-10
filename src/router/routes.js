import Home from '@/components/Home';
import Profile from '@/components/Profile';
import Startup from '@/components/Startup';

const routes = [
  {
    path: '/',
    component: Startup,
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
];

export default routes;
