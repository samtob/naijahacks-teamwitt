import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayoutPage } from './payout';

@NgModule({
  declarations: [
    PayoutPage,
  ],
  imports: [
    IonicPageModule.forChild(PayoutPage),
  ],
})
export class PayoutPageModule {}
