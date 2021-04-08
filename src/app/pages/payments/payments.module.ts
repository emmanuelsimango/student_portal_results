import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { Paynow } from 'paynow';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
	ComponentsModule,
	FormsModule,
	ReactiveFormsModule,
    HttpClientModule,
	NgbModule,
	ComponentsModule,

  ]
})
export class PaymentsModule {


}
