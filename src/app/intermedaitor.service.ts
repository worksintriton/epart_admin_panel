import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class IntermedaitorService {
  constructor(private http:HttpClient) { }

  addIntermedaitor(data){
    return this.http.post(environment.baseurl + 'Intermedaitor/create',data);
  }

  updateIntermedaitor(data){
    return this.http.post(environment.baseurl + 'Intermedaitor/update',data);
  }

  listIntermedaitor(){
    return this.http.get(environment.baseurl + 'Intermedaitor/getlist');
  }

  detailsIntermedaitor(id){
    return this.http.get(environment.baseurl + 'Intermedaitor/details?id='+id);
  }

  deleteIntermedaitor(id){
    return this.http.delete(environment.baseurl + 'Intermedaitor/delete?id='+id);
  }
}
