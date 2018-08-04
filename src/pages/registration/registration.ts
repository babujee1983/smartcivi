import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Storage} from '@ionic/storage';
import {SingletonServiceProvider} from '../../providers/singleton-service/singleton-service';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
  
})
export class RegistrationPage {  
  private reg : FormGroup;
  
  public showCom : Boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage : Storage,private formBuilder: FormBuilder,
              public service : SingletonServiceProvider) {
    this.reg = this.formBuilder.group({
      siteKey: [this.service.siteKey, Validators.required],
      apiKey: [this.service.apiKey, Validators.required],
      siteUrl: [this.service.siteUrl, Validators.required],
    });   
    
  }

  register(){
    this.storage.set('siteUrl',this.reg.value.siteUrl);
    this.storage.set('apiKey',this.reg.value.apiKey);
    this.storage.set('siteKey',this.reg.value.siteKey);    
  }  

}
