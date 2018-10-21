import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeocodingPage } from '../pages/geocoding/geocoding';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
//import { TabsPage } from '../pages/tabs/tabs';
import { FrontPage } from '../pages/front/front';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProvidersWeatherProvider } from '../providers/providers-weather/providers-weather';
import { SettingPage } from '../pages/setting/setting';
import { MainPage } from '../pages/main/main';
import {MaizePage } from '../pages/maize/maize';
import { SoyaPage } from '../pages/soya/soya';
import { PalmPage} from '../pages/palm/palm';
import { RegistrationPage } from '../pages/registration/registration';
import { PoultryPage } from '../pages/poultry/poultry';
import { PayoutPage } from '../pages/payout/payout';



export const firebaseAuth = {
  apiKey: "AIzaSyC20FFGytHenA2msuPXltPIbCi1l5m8Ehk",
  authDomain: "agrotechplus-da0f1.firebaseapp.com",
  databaseURL: "https://agrotechplus-da0f1.firebaseio.com",
  projectId: "agrotechplus-da0f1",
  storageBucket: "agrotechplus-da0f1.appspot.com",
  messagingSenderId: "1034353495233"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    MaizePage,
    RegistrationPage,
    PayoutPage,
    SoyaPage,
    PalmPage,
    PoultryPage,
    ProfilePage,
    LoginPage,
    FrontPage,
    SettingPage,
    RegisterPage,
    WelcomePage,
    ContactPage,
    GeocodingPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MaizePage,
    SoyaPage,
    PalmPage,
    PoultryPage,
    RegistrationPage,
    PayoutPage,
    HomePage,
    LoginPage,
    MainPage,
    ContactPage,
    RegisterPage,
    FrontPage,
    SettingPage,
    WelcomePage,
    ProfilePage,
    GeocodingPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvidersWeatherProvider
  ]
})
export class AppModule {}
