
// separa o bundle e faz loading lazy
const Hello = () => System.import('@/components/Hello');
const Teste = () => System.import('@/components/Teste');
const Home = () => System.import('@/components/Home');
const Usuario = () => System.import('@/components/Usuario');
const Inicial = () => System.import('@/components/Inicial');

export default [
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
