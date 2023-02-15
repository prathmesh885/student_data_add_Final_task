import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { StudentformComponent } from './shared/components/studentform/studentform.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [

  {
    path: '', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'navbar', component: AppComponent
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'stdForm', component: StudentformComponent, canActivate: [AuthGuard]
  },
  {
    path: 'stdForm/:id', component: StudentformComponent, canActivate: [AuthGuard]
  },




]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
