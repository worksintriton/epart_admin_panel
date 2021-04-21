import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(private http:HttpClient) { }

  addSellers(data){
    return this.http.post(environment.baseurl + 'sellers/create',data);
  }

  updateSellers(data){
    return this.http.post(environment.baseurl + 'sellers/update',data);
  }

  listSellers(){
    return this.http.get(environment.baseurl + 'sellers/getlist');
  }

  detailsSellers(id){
    return this.http.get(environment.baseurl + 'sellers/details?id='+id);
  }

  deleteSellers(id){
    return this.http.delete(environment.baseurl + 'sellers/delete?id='+id);
  }
}
