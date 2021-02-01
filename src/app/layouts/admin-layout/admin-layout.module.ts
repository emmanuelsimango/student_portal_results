import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgForm } from '@angular/forms';

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

import { UserComponent } from "../../pages/user/user.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ResultsComponent } from 'src/app/pages/results/results.component';
import { BursaryComponent } from 'src/app/pages/bursary/bursary.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModulesComponent } from 'src/app/pages/modules/modules.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BursaryService } from 'src/app/services/auth/bursary.service';
import { ResetCardPinComponent } from 'src/app/pages/reset-card-pin/reset-card-pin.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
	FormsModule,
	// NgForm,
    HttpClientModule,
	NgbModule,
	ComponentsModule,
    ToastrModule.forRoot({
		timeOut: 10000,
		positionClass: 'toast-top-right',
		preventDuplicates: true,
	  }), // ToastrModule added
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    ResultsComponent,
	BursaryComponent,
	ModulesComponent,
	ResetCardPinComponent,
	RegisterComponent

  ],
  providers:[BursaryService]
})
export class AdminLayoutModule {}
