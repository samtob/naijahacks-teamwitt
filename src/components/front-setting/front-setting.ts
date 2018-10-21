import { Component } from '@angular/core';

/**
 * Generated class for the FrontSettingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'front-setting',
  templateUrl: 'front-setting.html'
})
export class FrontSettingComponent {

  text: string;

  constructor() {
    console.log('Hello FrontSettingComponent Component');
    this.text = 'Hello World';
  }

}
