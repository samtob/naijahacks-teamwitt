import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaizePage } from './maize';

@NgModule({
  declarations: [
    MaizePage,
  ],
  imports: [
    IonicPageModule.forChild(MaizePage),
  ],
})
export class MaizePageModule {}
