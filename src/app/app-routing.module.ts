import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'admin',
      component: DashboardComponent,
      children: [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'payments',
          component: PaymentsComponent,
        },
        {
          path: 'settings',
          component: SettingsComponent,
        },        
      ]
    }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
