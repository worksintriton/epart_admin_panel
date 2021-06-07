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
    return this.http.post(environment.baseurl+'city-management/create',data);
  }

  updateCity(data){
    return this.http.put(environment.baseurl+'city-management/update/'+data.id,data)
  }

  deleteCity(id){
    return this.http.delete(environment.baseurl+'city-management/delete/'+id);
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
    return this.http.post(environment.baseurl+'state-management/create',data);
  }

  updateState(data){
    return this.http.put(environment.baseurl+'state-management/update/'+data.id,data)
  }

  deleteState(id){
    return this.http.delete(environment.baseurl+'state-management/delete/'+id);
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
    return this.http.post(environment.baseurl+'country-management/create',data);
  }

  updateCountry(data){
    return this.http.put(environment.baseurl+'country-management/update/'+data.id,data)
  }

  deleteCountry(id){
    return this.http.delete(environment.baseurl+'country-management/delete/'+id);
  }

  searchCountryList(data){
    return this.http.post(environment.baseurl+'country-management/search',data)
  }


 // Country MANAGEMENT API LIST ENDEDS HERE //


 // Currency MANAGEMENT API LIST STARTS HERE //

  getCurrencyList(){
    return this.http.get(environment.baseurl+'currency-management/getlist')
  }

  getCurrencyInfo(id){
    return this.http.get(environment.baseurl+'currency-management/getby_id/'+id);
  }

  createCurrency(data){
    return this.http.post(environment.baseurl+'currency-management/create',data);
  }

  updateCurrency(data){
    return this.http.put(environment.baseurl+'currency-management/update/'+data.id,data)
  }

  deleteCurrency(id){
    return this.http.delete(environment.baseurl+'currency-management/delete/'+id);
  }

  searchCurrencyList(data){
    return this.http.post(environment.baseurl+'currency-management/search',data)
  }


 // Currency MANAGEMENT API LIST ENDEDS HERE //

 // PAYOUT SCHEDULE MANAGEMENT API LIST STARTS HERE //

 getPayoutList(){
  return this.http.get(environment.baseurl+'payout-management/getlist')
}

getPayoutInfo(id){
  return this.http.get(environment.baseurl+'payout-management/getby_id/'+id);
}

createPayout(data){
  return this.http.post(environment.baseurl+'payout-management/create',data);
}

updatePayout(data){
  return this.http.put(environment.baseurl+'payout-management/update/'+data.id,data)
}

deletePayout(id){
  return this.http.delete(environment.baseurl+'payout-management/delete/'+id);
}

searchPayoutList(data){
  return this.http.post(environment.baseurl+'payout-management/search',data)
}


// PAYOUT SCHEDULE MANAGEMENT API LIST ENDEDS HERE //


 // Product Type MANAGEMENT API LIST STARTS HERE //

 getProductTypeList(){
  return this.http.get(environment.baseurl+'productType-management/getlist')
}

getProductTypeInfo(id){
  return this.http.get(environment.baseurl+'productType-management/getby_id/'+id);
}

createProductType(data){
  return this.http.post(environment.baseurl+'productType-management/create',data);
}

updateProductType(data){
  return this.http.put(environment.baseurl+'productType-management/update/'+data.id,data)
}

deleteProductType(id){
  return this.http.delete(environment.baseurl+'productType-management/delete/'+id);
}

searchProductTypeList(data){
  return this.http.post(environment.baseurl+'productType-management/search',data)
}


// Product Type MANAGEMENT API LIST ENDEDS HERE //

// Reason Type MANAGEMENT API LIST STARTS HERE //

 getReasonList(){
  return this.http.get(environment.baseurl+'reason-management/getlist')
}

getReasonInfo(id){
  return this.http.get(environment.baseurl+'reason-management/getby_id/'+id);
}

createReason(data){
  return this.http.post(environment.baseurl+'reason-management/create',data);
}

updateReason(data){
  return this.http.put(environment.baseurl+'reason-management/update/'+data.id,data)
}

deleteReason(id){
  return this.http.delete(environment.baseurl+'reason-management/delete/'+id);
}

searchReasonList(data){
  return this.http.post(environment.baseurl+'reason-management/search',data)
}


// Reason Type MANAGEMENT API LIST ENDEDS HERE //



// InfoCms Type MANAGEMENT API LIST STARTS HERE //

getInfoCmsList(){
  return this.http.get(environment.baseurl+'cms-main/info_cms/getlist')
}

getInfoCmsInfo(id){
  return this.http.get(environment.baseurl+'cms-main/info_cms/getby_id/'+id);
}

createInfoCms(data){
  return this.http.post(environment.baseurl+'cms-main/info_cms/create',data);
}

updateInfoCms(data){
  return this.http.put(environment.baseurl+'cms-main/info_cms/update/'+data.id,data)
}

deleteInfoCms(id){
  return this.http.delete(environment.baseurl+'cms-main/info_cms/delete/'+id);
}

searchInfoCmsList(data){
  return this.http.post(environment.baseurl+'cms-main/info_cms/search',data)
}


// InfoCms Type MANAGEMENT API LIST ENDEDS HERE //

}

