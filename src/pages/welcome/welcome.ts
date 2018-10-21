import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import {RegistrationPage } from '../registration/registration';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  @ViewChild(Slides) slides : Slides;
  skipmsg: string = "Skip";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  skip() {
    this.navCtrl.push(RegistrationPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  slideChanged() {
    if(this.slides.isEnd()) {
        this.skipmsg = "All right, I got it";
    } if(this.slides.isBeginning()) {
        this.skipmsg = "Skip";
    }

}
}
