import Hello from '@/components/Hello';

// separa o bundle e faz loading lazy
const Teste = () => System.import('@/components/Teste');
const Home = () => System.import('@/components/Home');
const Usuario = () => System.import('@/components/Usuario');
const Inicial = () => System.import('@/components/Inicial');

export default [
  {
    path: '/',
    name: 'Hello',
    titulo: 'Helllo',
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
    path: '/Inicial',
    name: 'Inicial',
    titulo: 'Inicial',
    exibirHeader: !false,
    component: Inicial,
  },
  {
    path: '/usuario',
    name: 'usuario',
    titulo: 'Usuario',
    exibirHeader: true,
    exibir: false,
    component: Usuario,
  },
];
