import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminModuleService {
  
  constructor(private http:HttpClient) { }

  // CITY MANAGEMENT API LIST STARTS HERE //


  getCityList(){
    return this.http.get(environment.baseurl+'city-management/getlist')
  }

  getCityInfo(id){
    return this.http.get(environment.baseurl+'city-management/getby_id/'+id);
  }

  createCity(data){
    return this.http.post(environment.baseurl+'city-management/getlist',data);
  }

  updateCity(data){
    return this.http.put(environment.baseurl+'city-management/getlist/'+data.id,data)
  }

  deleteCity(id){
    return this.http.delete(environment.baseurl+'city-management/getlist/'+id);
  }

  searchCityList(data){
    return this.http.post(environment.baseurl+'city-management/search',data)
  }


  // CITY MANAGEMENT API LIST ENDEDS HERE //


  // STATE MANAGEMENT API LIST STARTS HERE //

  getStateList(){
    return this.http.get(environment.baseurl+'state-management/getlist')
  }

  getStateInfo(id){
    return this.http.get(environment.baseurl+'state-management/getby_id/'+id);
  }

  createState(data){
    return this.http.post(environment.baseurl+'state-management/getlist',data);
  }

  updateState(data){
    return this.http.put(environment.baseurl+'state-management/getlist/'+data.id,data)
  }

  deleteState(id){
    return this.http.delete(environment.baseurl+'state-management/getlist/'+id);
  }

  searchStateList(data){
    return this.http.post(environment.baseurl+'city-management/search',data)
  }


 // STATE MANAGEMENT API LIST ENDEDS HERE //


 // Country MANAGEMENT API LIST STARTS HERE //

  getCountryList(){
    return this.http.get(environment.baseurl+'country-management/getlist')
  }

  getCountryInfo(id){
    return this.http.get(environment.baseurl+'country-management/getby_id/'+id);
  }

  createCountry(data){
    return this.http.post(environment.baseurl+'country-management/getlist',data);
  }

  updateCountry(data){
    return this.http.put(environment.baseurl+'country-management/getlist/'+data.id,data)
  }

  deleteCountry(id){
    return this.http.delete(environment.baseurl+'country-management/delete/'+id);
  }

  searchCountryList(data){
    return this.http.post(environment.baseurl+'country-management/search',data)
  }


 // Country MANAGEMENT API LIST ENDEDS HERE //

}

