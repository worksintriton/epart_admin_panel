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
import { AddbuyerComponent } from './user-modules/addbuyer/addbuyer.component';
import { AddsellerComponent } from './user-modules/addseller/addseller.component';
import { AddintermediatorComponent } from './user-modules/addintermediator/addintermediator.component';
import { AddcityComponent } from './admin-modules/app-features/addcity/addcity.component';
import { AddcountryComponent } from './admin-modules/app-features/addcountry/addcountry.component';
import { AddcurrencyComponent } from './admin-modules/app-features/addcurrency/addcurrency.component';
import { AddpayoutScheduleComponent } from './admin-modules/app-features/addpayout-schedule/addpayout-schedule.component';
import { AddproductTypeComponent } from './admin-modules/app-features/addproduct-type/addproduct-type.component';
import { AddreasonComponent } from './admin-modules/app-features/addreason/addreason.component';
import { AddroleComponent } from './admin-modules/app-features/addrole/addrole.component';
import { AddstateComponent } from './admin-modules/app-features/addstate/addstate.component';
import { AddsubscriptionPlanComponent } from './admin-modules/app-features/addsubscription-plan/addsubscription-plan.component';
import { AddtradingTypeComponent } from './admin-modules/app-features/addtrading-type/addtrading-type.component';
import { AdduserTypeComponent } from './admin-modules/app-features/adduser-type/adduser-type.component';
import { CmsInfoComponent } from './admin-modules/cms/cms-info/cms-info.component';
import { CmsBannerComponent } from './admin-modules/cms/cms-banner/cms-banner.component';
import { CmsFeaturesComponent } from './admin-modules/cms/cms-features/cms-features.component';
import { CmsHeroSectionComponent } from './admin-modules/cms/cms-hero-section/cms-hero-section.component';
import { CmsServicesComponent } from './admin-modules/cms/cms-services/cms-services.component';
import { CmsFooterComponent } from './admin-modules/cms/cms-footer/cms-footer.component';
import { AddUsersComponent } from './admin-modules/app-users/add-users/add-users.component';
import {MatIconModule} from '@angular/material/icon';

import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSliderModule} from '@angular/material/slider';
import { ChartsModule } from 'ng2-charts';
import {MatProgressBarModule} from '@angular/material/progress-bar';

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
    AddsubscriptionPlanComponent,
    AddtradingTypeComponent,
    AdduserTypeComponent,
    CmsInfoComponent,
    CmsBannerComponent,
    CmsFeaturesComponent,
    CmsHeroSectionComponent,
    CmsServicesComponent,
    CmsFooterComponent,
    AddUsersComponent,
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
    DataTablesModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    FlexLayoutModule,
    MatSliderModule,
    ChartsModule,
    MatProgressBarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
