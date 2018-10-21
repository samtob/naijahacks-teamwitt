import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {MaizePage } from '../maize/maize';
import { SoyaPage } from '../soya/soya';
import { PalmPage} from '../palm/palm';
import { PoultryPage } from '../poultry/poultry';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(private toastCtrl : ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }
profile() {
  this.navCtrl.push(ProfilePage);
}
logout() {
  let toast = this.toastCtrl.create({
  message : "You are logged out",
    duration: 2000
  });
  toast.present();
  setTimeout(()=> { this.navCtrl.push(RegistrationPage); }, 3000);
}

maize() {
  this.navCtrl.push(MaizePage);
}
palm() {
  this.navCtrl.push(PalmPage);
}
soya(){
  this.navCtrl.push(SoyaPage);
}
poultry(){
  this.navCtrl.push(PoultryPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
