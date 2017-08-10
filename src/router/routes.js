
// separa o bundle e faz loading lazy
import Hello from '@/components/Hello';
import Teste from '@/components/Teste';
import Home from '@/components/Home';
import Usuario from '@/components/Usuario';
import Inicial from '@/components/Inicial';

const routes = [
  {
    path: '/',
    name: '',
    titulo: 'Inicial',
    exibir: false,
    exibirHeader: false,
    component: Inicial,
  },
  {
    path: '/hello',
    name: 'Hello',
    titulo: 'Hello',
    component: Hello,
  },
  {
    path: '/teste',
    name: 'teste',
    titulo: 'Teste',
    component: Teste,
  },
  {
    path: '/home',
    name: 'Home',
    titulo: 'Home',
    component: Home,
  },
  {
    path: '/usuario',
    name: 'usuario',
    titulo: 'Usuario',
    exibir: false,
    component: Usuario,
  },
];

export default routes;
