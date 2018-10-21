import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FrontPage } from '../pages/front/front';
import { WelcomePage } from '../pages/welcome/welcome';
import { ContactPage } from '../pages/contact/contact';
import { GeocodingPage } from '../pages/geocoding/geocoding';
import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  showSplash = true;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public viewCtrl : ViewController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Home', component: HomePage },
     // { icon: 'list', title: 'List', component: ListPage },
      {icon: 'map', title: 'Geocoding', component: GeocodingPage },
      //{ icon: 'home', title: 'Front', component: FrontPage },
      { icon: 'register', title: 'Register', component: RegisterPage },
      { icon: 'login', title: 'Login', component: LoginPage },
      {icon: 'flag', title: 'Welcome', component: WelcomePage },
      {icon: 'contact', title: 'Contact', component: ContactPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(5000).subscribe(() => this.showSplash = false);
    });
  }

  close(){
    this.viewCtrl.dismiss();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
