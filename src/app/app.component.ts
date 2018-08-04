import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegistrationPage} from '../pages/registration/registration';
import { ContactPage} from '../pages/contact/contact';
import { SearchPage} from '../pages/search/search';
import {Storage} from '@ionic/storage';
import {SingletonServiceProvider} from '../providers/singleton-service/singleton-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen
    , public service : SingletonServiceProvider,public storage : Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },      
      { title: 'Contact', component:ContactPage},
      { title: 'Settings', component:RegistrationPage },
      { title: 'SearchPage', component:SearchPage }    
    ];
  }

  initializeApp() {
    this.storage.get('siteUrl').then((data) => {      
      this.service.siteUrl=data;                     
    });
    this.storage.get('apiKey').then((data) => {      
      this.service.apiKey=data;      
    });
    this.storage.get('siteKey').then((data) => {      
      this.service.siteKey=data;      
    }); 
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();     
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
