import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbuyersComponent } from './addbuyers/addbuyers.component';
import { AddsellersComponent } from './addsellers/addsellers.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcarsComponent } from './addcars/addcars.component';
import { AddintermedaitorComponent } from './addintermedaitor/addintermedaitor.component';
import { EcellsComponent } from './ecells/ecells.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './user-pages/navigation/navigation.component';
import { HomeComponent } from './user-pages/home/home.component';
import { ForgotPasswordComponent } from './user-pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './user-pages/reset-password/reset-password.component';

const routes: Routes = [
  {path:'',redirectTo:'navigation',pathMatch:'full'},
  {path:'navigation',component:NavigationComponent, children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
  ]},
  {path:'home',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'admin',component:AdminComponent,children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'buyermanagement', component:AddbuyersComponent},
    {path:'sellermanagement', component:AddsellersComponent},
    {path:'intermedaitormanagement', component:AddintermedaitorComponent},
    {path:'cars', component:AddcarsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
