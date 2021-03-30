import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { Paynow } from 'paynow';


@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
	ComponentsModule,
	
  ]
})
export class PaymentsModule {


}
