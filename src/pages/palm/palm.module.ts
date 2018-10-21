import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PalmPage } from './palm';

@NgModule({
  declarations: [
    PalmPage,
  ],
  imports: [
    IonicPageModule.forChild(PalmPage),
  ],
})
export class PalmPageModule {}
