import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    @ViewChild('username') user;
    @ViewChild('password') password;

  constructor(private Toast : ToastController, private alertCtrl : AlertController, private fire : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
alert(message : string) {
    this.alertCtrl.create({
        title : 'Alert',
        subTitle : message,
        buttons : ['OK']
    }).present();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  loginuser() {
      this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value).then(data => {
        if(this.user.value, this.password.value == "" || this.user.value, this.password.value == null ) {
          let toast = this.Toast.create({
            message : "Your input fields are empty. Please fill in the right details. Thanks",
            duration : 3000,
            position: 'middle'
        });
        toast.present();
      } else if(this.user.value, this.password.value !== true) {
        let toast = this.Toast.create({
          message : "Data are incorrect. Please in the correct details. Thanks",
          duration : 3000,
          position: 'middle'
      });
      toast.present();
      } else {
        this.alert('You have logged in');
        console.log('that\'s a data', this.fire.auth.currentUser);
        setTimeout(()=> {this.navCtrl.setRoot(HomePage);}, 2000);
    }
         
         
      }).catch(error => {
          console.log('that\'s an error', error);
      });
      //console.log('would you like to register with', this.user.value, this.password.value);
  }

}
