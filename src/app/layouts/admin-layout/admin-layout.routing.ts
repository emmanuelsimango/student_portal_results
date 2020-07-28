import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { ResultsComponent } from 'src/app/pages/results/results.component';
import { BursaryComponent } from 'src/app/pages/bursary/bursary.component';
import { FeesGuardService } from 'src/app/services/auth/fees-guard.service';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [

  { path: "bursary", component: BursaryComponent },
  { path: "user", component: UserComponent },
  { path: "results", component: ResultsComponent,canActivate:[FeesGuardService] },
  { path: "", redirectTo:"bursary" }
];
