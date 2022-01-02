import { Home } from './pages/Home';
// import { MyApp } from './pages/MyApp';
import { WapApp } from './pages/WapApp';


export const routes = [

  // {
  //   path: '/app/edit/:id',
  //   component: MyApp
  // },
  // {
  //   path: '/app/add',
  //   component: MyApp
  // },
  {
    path: '/app',
    component: WapApp
  },
  {
    path: '/',
    component: Home
  },

];
