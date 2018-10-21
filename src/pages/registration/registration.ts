import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }
async link(){
  const confirm = await this.alertCtrl.create({
    message: "We are working on the Auth. Please bear with us, and use the second option by registering via Email",
    buttons: ["OK"] 
  });
 return await confirm.present();
}
register() {
  this.navCtrl.push(RegisterPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
