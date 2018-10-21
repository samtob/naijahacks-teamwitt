import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController, ModalController } from 'ionic-angular';
import {LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { MainPage } from '../main/main';
import { RegisterPage } from '../register/register';
import { WelcomePage } from '../welcome/welcome';
import { SettingPage } from '../setting/setting';
import { ProvidersWeatherProvider } from '../../providers/providers-weather/providers-weather';

/**
 * Generated class for the FrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-front',
  templateUrl: 'front.html',
})
export class FrontPage {

  weather: any;
  location : {
      city: string,
      state: string
    }
  constructor(private Toast: ToastController, private modalCtrl: ModalController, private alertCtrl : AlertController, public navCtrl: NavController, private storage:Storage, private weatherProvider: ProvidersWeatherProvider) {

  }
  async promptAlert2() {
    const modal = await this.modalCtrl.create(SettingPage);
    return await modal.present();
  }
  

  async promptAlert() {
    const confirm = await this.alertCtrl.create({
      title: 'More',
      message: "To get the weather Status. Click the getweather status at the front page",
      inputs: [
        {
          name: 'title',
          placeholder: 'Input your Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            let tip =this.Toast.create({
              message: 'Nice'+  " " + confirm[2][0],
              duration: 2000
            });
            tip.present();
            console.log('Saved clicked');
          }
        }
      ]
    });
    return await confirm.present();
  }

  loguser() {
      this.navCtrl.push(MainPage);
  }
  
  //about() {
   //   this.navCtrl.push(AboutPage);
 // }
    ionViewWillEnter() {
        this.storage.get('location').then((val) => {
          if(val != null) {
          this.location = JSON.parse(val);
          } else {
               this.location = {
                  city: 'Lagos',
                  state: 'NG',
                
              }
          }

        this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather => {
              this.weather = weather.current_observation;


              });
        });

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrontPage');
  }

}
