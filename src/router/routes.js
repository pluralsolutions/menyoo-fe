import Hello from '@/components/Hello';
import Teste from '@/components/Teste';
import Home from '@/components/Home';

export default [
  {
    path: '/',
    name: 'Hello',
    titulo: 'Helllo',
    exibir: true,
    component: Hello,
  },
  {
    path: '/teste',
    name: 'Teste',
    titulo: 'Teste',
    exibir: true,
    component: Teste,
  },
  {
    path: '/Home',
    name: 'Home',
    titulo: 'Home',
    exibir: true,
    component: Home,
  },
];
