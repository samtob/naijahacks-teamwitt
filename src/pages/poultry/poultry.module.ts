import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoultryPage } from './poultry';

@NgModule({
  declarations: [
    PoultryPage,
  ],
  imports: [
    IonicPageModule.forChild(PoultryPage),
  ],
})
export class PoultryPageModule {}
