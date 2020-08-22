import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

import { UserComponent } from "../../pages/user/user.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ResultsComponent } from 'src/app/pages/results/results.component';
import { BursaryComponent } from 'src/app/pages/bursary/bursary.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModulesComponent } from 'src/app/pages/modules/modules.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
	NgbModule,
	ComponentsModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    ResultsComponent,
	BursaryComponent,
	ModulesComponent
  ]
})
export class AdminLayoutModule {}
