import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'tasks', loadComponent: () => import('./tasks/tasks.component').then(m => m.TasksComponent) }
];
