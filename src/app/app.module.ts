import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentsComponent } from './payments/payments.component';
import { SettingsComponent } from './settings/settings.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule, MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent,
    PaymentsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatTableModule, 
    MatSortModule,
    MatTabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
