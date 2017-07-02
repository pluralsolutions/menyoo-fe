import Hello from '@/components/Hello';

// separa o bundle e faz loading lazy
const Teste = () => System.import('@/components/Teste');
const Home = () => System.import('@/components/Home');
const Usuario = () => System.import('@/components/Usuario');

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
    name: 'teste',
    titulo: 'Teste',
    exibir: true,
    component: Teste,
  },
  {
    path: '/home',
    name: 'Home',
    titulo: 'Home',
    exibir: true,
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
