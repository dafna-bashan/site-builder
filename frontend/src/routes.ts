import { Home } from './pages/Home';
// import { MyApp } from './pages/MyApp';
import { WapApp } from './pages/WapApp';
import { WapEditor } from './pages/WapEditor';


export const routes = [

  {
    path: '/editor/:id?',
    component: WapEditor
  },
  // {
  //   path: '/app/add',
  //   component: MyApp
  // },
  {
    path: '/templates',
    component: WapApp
  },
  {
    path: '/',
    component: Home
  },

];
