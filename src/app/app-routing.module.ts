import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'auth',
    loadChildren: () => import('./Auth/auth.module').then(m => m.default)
  },
  {
    path:'views',
    loadChildren: () => import('./views/views.module').then(m => m.default)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
