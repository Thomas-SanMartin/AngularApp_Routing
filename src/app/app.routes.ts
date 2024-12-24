import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'tasks', loadComponent: () => import('./tasks/tasks.component').then(m => m.TasksComponent) },
  { path: 'news', loadComponent: () => import('./news/news.component').then(m => m.NewsComponent) },
  { path: 'tools', loadComponent: () => import('./tools/tools.component').then(m => m.ToolsComponent) }
];
