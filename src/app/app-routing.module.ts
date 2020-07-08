import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './core/admin/services/AuthGuard.service';
import {LoginComponent} from './core/admin/components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/planning', pathMatch: 'full'},
  {
    path: 'planning',
    loadChildren: () => import('./planning/planning.module').then(m => m.PlanningModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
