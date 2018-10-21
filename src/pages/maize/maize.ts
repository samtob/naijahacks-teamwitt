import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayoutPage } from '../payout/payout';

/**
 * Generated class for the MaizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maize',
  templateUrl: 'maize.html',
})
export class MaizePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  pay() {
    this.navCtrl.push(PayoutPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MaizePage');
  }

}
