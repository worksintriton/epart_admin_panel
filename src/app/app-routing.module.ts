import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AddcityComponent } from './admin-modules/app-fetures/addcity/addcity.component';
import { AddcountryComponent } from './admin-modules/app-fetures/addcountry/addcountry.component';
import { AddcurrencyComponent } from './admin-modules/app-fetures/addcurrency/addcurrency.component';
import { AddpayoutScheduleComponent } from './admin-modules/app-fetures/addpayout-schedule/addpayout-schedule.component';
import { AddproductTypeComponent } from './admin-modules/app-fetures/addproduct-type/addproduct-type.component';
import { AddreasonComponent } from './admin-modules/app-fetures/addreason/addreason.component';
import { AddroleComponent } from './admin-modules/app-fetures/addrole/addrole.component';
import { AddstateComponent } from './admin-modules/app-fetures/addstate/addstate.component';
import { AddbuyerComponent } from './user-modules/addbuyer/addbuyer.component';
import { ContactComponent } from './user-pages/contact/contact.component';
import { PricingComponent } from './user-pages/pricing/pricing.component';

const routes: Routes = [
  {path:'',redirectTo:'navigation',pathMatch:'full'},
  {path:'navigation',component:NavigationComponent, children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'pricing',component:PricingComponent},
  ]},
  {path:'home',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'admin',component:AdminComponent,children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'buyermanagement', component:AddbuyerComponent},
    {path:'sellermanagement', component:AddsellersComponent},
    {path:'intermedaitormanagement', component:AddintermedaitorComponent},
    {path:'cars', component:AddcarsComponent},
    {path:'city-management', component:AddcityComponent},
    {path:'country-management', component:AddcountryComponent},
    {path:'currency-management', component:AddcurrencyComponent},
    {path:'payout-schedule-management', component:AddpayoutScheduleComponent},
    {path:'product-type-management', component:AddproductTypeComponent},
    {path:'reason-management', component:AddreasonComponent},
    {path:'role-management', component:AddroleComponent},
    {path:'state-management', component:AddstateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
