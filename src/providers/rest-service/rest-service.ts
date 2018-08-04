import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestServiceProvider {
  externalArry =new Array<any>();
  apiUrl = 'https://jsonplaceholder.typicode.com'; 
  constructor(public http: HttpClient) {    
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {        
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  };

  getContact(apiUrl : string, par:any) {
    this.externalArry =[];
    
    return new Promise(resolve => {
      this.http.get(apiUrl,{params:par})            
      .subscribe((data : any) => { 
        for(var i =1; i<= data.count; i++){
          this.externalArry.push(data.values[i]);
        }                      
        resolve(this.externalArry);
      }, err => {
        console.log(err);
      });
    });
  };
  

}
