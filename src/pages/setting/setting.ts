import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FrontPage } from '../front/front';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
city: string;
state: string;

  constructor(public navCtrl: NavController,private storage:Storage, public navParams: NavParams) {
	  this.storage.get('location').then((val) => {
	  if(val != null) {
		  let location = JSON.parse(val);
		  this.city = location.city;
			this.state =location.state;
	  }  else {
	  this.city = 'Lagos';
	  this.state =  'NG';
		}
	});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
 
  saveForm() {
	  let location = {
		  city: this.city,
		  state: this.state
	  }
	 this.storage.set('location', JSON.stringify(location));
	 this.navCtrl.push(FrontPage);
  }

}
