import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SingletonServiceProvider} from '../../providers/singleton-service/singleton-service';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  apiUrl : any;
  public contact : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public service : SingletonServiceProvider , 
              public restsp : RestServiceProvider) {
    if (this.service.siteUrl != null && this.service.apiKey != null && this.service.siteKey !=null)  {
      this.apiUrl = this.service.getUrl();
    }
    this.getContact(); 
  }

  getContact() {
    let par = {entity:'Contact',action:'get',api_key:this.service.apiKey,key:this.service.siteKey, json:{"sequential":1 }};
    this.restsp.getContact(this.apiUrl,par  )
    .then(data => {
      this.contact = data;     
      console.log(this.contact);
    });
  }

}
