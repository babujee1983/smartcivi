
import { Injectable } from '@angular/core';

@Injectable()
export class SingletonServiceProvider {
  public siteUrl : string = '';
  public apiKey : string = '';
  public siteKey : string = ''; 
  constructor() {       

  }

  public getUrl() : string{   
    return "/api"; 
   //return this.siteUrl + 'extern/rest.php';  
  }
}
