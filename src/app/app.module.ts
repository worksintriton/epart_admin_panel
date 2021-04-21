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
import { ProductListComponent } from './user-pages/product-list/product-list.component';

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
    ProductListComponent,
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
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
