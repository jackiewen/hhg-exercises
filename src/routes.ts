import IRoute from './types/IRoute';
import Counter from './components/Counter';
import Employee from './components/Employee';

const routes: IRoute[] = [
  {
    path: '/counter',
    name: 'Counter',
    icon: "nc-icon nc-ruler-pencil",
    component: Counter
  },
  {
    path: '/employee',
    name: 'Employee',
    icon: "nc-icon nc-bullet-list-67",
    component: Employee
  },
];

export default routes;