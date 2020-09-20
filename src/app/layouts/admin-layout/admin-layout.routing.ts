import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { ResultsComponent } from 'src/app/pages/results/results.component';
import { BursaryComponent } from 'src/app/pages/bursary/bursary.component';
import { FeesGuardService } from 'src/app/services/auth/fees-guard.service';
import { ModulesComponent } from 'src/app/pages/modules/modules.component';
import { IconsComponent } from 'src/app/pages/icons/icons.component';
import { NoticesComponent } from 'src/app/pages/notices/notices.component';
import { ResetCardPinComponent } from 'src/app/pages/reset-card-pin/reset-card-pin.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [

  { path: "bursary", component: BursaryComponent },
  { path: "user", component: UserComponent },
  { path: "results", component: ResultsComponent,canActivate:[FeesGuardService] },
  { path: "dashboard", component:DashboardComponent},
  { path: "modules", component:ModulesComponent},
  { path: "profile", component:UserComponent},
  { path: "notices", component:NoticesComponent},
  { path: "resetpin", component:ResetCardPinComponent}

];
