import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'protaskin1234App.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'protaskin1234App.task.home.title' },
    loadChildren: () => import('./task/task.routes'),
  },
  {
    path: 'category',
    data: { pageTitle: 'protaskin1234App.category.home.title' },
    loadChildren: () => import('./category/category.routes'),
  },
  {
    path: 'comment',
    data: { pageTitle: 'protaskin1234App.comment.home.title' },
    loadChildren: () => import('./comment/comment.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
