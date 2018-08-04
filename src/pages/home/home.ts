import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Storage} from '@ionic/storage';
import {SingletonServiceProvider} from '../../providers/singleton-service/singleton-service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  
})
export class HomePage {   
  private reg : FormGroup;
  public showCom : Boolean = false;

  constructor(public navCtrl: NavController,public storage : Storage, public service : SingletonServiceProvider,private formBuilder: FormBuilder) {
    this.reg = this.formBuilder.group({
      siteKey: ['', Validators.required],
      apiKey: ['', Validators.required],
      siteUrl: ['', Validators.required],
    });    
    // if (this.service.siteUrl !=''){
    //   this.showCom = false;
    // }   
  }   
  register(){
    this.storage.set('siteUrl',this.reg.value.siteUrl);
    this.storage.set('apiKey',this.reg.value.apiKey);
    this.storage.set('siteKey',this.reg.value.siteKey);  
  } 
}
