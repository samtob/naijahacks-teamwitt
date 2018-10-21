import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
 @ViewChild('username') user;
 @ViewChild('password') password;
  constructor(private Toast : ToastController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
registeruser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value).then(data => {
        if (this.user.value && this.password.value == '' || this.user.value && this.password.value == 'null') {
            let toast = this.Toast.create({
                message : "Your inputs are empty",
                duration : 2000
            });
            toast.present();
        } else {
    console.log('this app got a data', data);
                //async(SMS.send(this.numarea, this.textarea));
                let toast = this.Toast.create({
                    message : "You are now registered, you can now proceed to log in",
                    duration : 3000,
                    position: 'middle'
                });
                toast.present();
                setTimeout(()=> { this.navCtrl.push(LoginPage);}
                , 5000);
        }
    }).catch(error => {
    console.log('that is an error', error)
    let toast = this.Toast.create({
        message : "There is an error in your registration. Please Check your registration credentials",
        duration : 3000
    });
    toast.present();
});


}
    //console.log('would you like to register with', this.user.value, this.password.value);
}
