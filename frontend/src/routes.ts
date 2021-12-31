import { Home } from './pages/Home';
import { MyApp } from './pages/MyApp';


export const routes = [

  {
    path: '/app/edit/:id',
    component: MyApp
  },
  {
    path: '/app/add',
    component: MyApp
  },
  {
    path: '/app',
    component: MyApp
  },
  {
    path: '/',
    component: Home
  },

];
