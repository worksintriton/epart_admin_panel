import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ng6-toastr-notifications';
import { AgGridModule } from 'ag-grid-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EcellsComponent } from './ecells/ecells.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddbuyersComponent } from './addbuyers/addbuyers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddsellersComponent } from './addsellers/addsellers.component';
import { AddsettingsComponent } from './addsettings/addsettings.component';
import { AddintermedaitorComponent } from './addintermedaitor/addintermedaitor.component';
import { AddcarsComponent } from './addcars/addcars.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './user-pages/navigation/navigation.component';
import { HomeComponent } from './user-pages/home/home.component';
import { FooterComponent } from './user-pages/footer/footer.component';
import { ContactComponent } from './user-pages/contact/contact.component';
import { PricingComponent } from './user-pages/pricing/pricing.component';
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
import { AddsellerComponent } from './user-modules/addseller/addseller.component';
import { AddintermediatorComponent } from './user-modules/addintermediator/addintermediator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EcellsComponent,
    AddbuyersComponent,
    DashboardComponent,
    AddsellersComponent,
    AddsettingsComponent,
    AddintermedaitorComponent,
    AddcarsComponent,
    LandingComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    PricingComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AddcityComponent,
    AddcountryComponent,
    AddcurrencyComponent,
    AddpayoutScheduleComponent,
    AddproductTypeComponent,
    AddreasonComponent,
    AddroleComponent,
    AddstateComponent,
    AddbuyerComponent,
    AddsellerComponent,
    AddintermediatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    NgSelectModule,
    AngularEditorModule,
    HttpClientModule,
    NgxPaginationModule,
    FilterPipeModule,
    AutocompleteLibModule,
    CarouselModule,
    DataTablesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
