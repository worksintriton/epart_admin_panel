import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BuyersService {

  constructor(private http:HttpClient) { }

  addBuyers(data){
    return this.http.post(environment.baseurl + 'buyers/create',data);
  }

  updateBuyers(data){
    return this.http.post(environment.baseurl + 'buyers/update',data);
  }

  listBuyers(){
    return this.http.get(environment.baseurl + 'buyers/getlist');
  }

  detailsBuyers(id){
    return this.http.get(environment.baseurl + 'buyers/details?id='+id);
  }

  deleteBuyers(id){
    return this.http.delete(environment.baseurl + 'buyers/delete?id='+id);
  }
}
