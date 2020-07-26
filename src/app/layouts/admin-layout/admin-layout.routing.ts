import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ResultsComponent } from 'src/app/pages/results/results.component';
import { BursaryComponent } from 'src/app/pages/bursary/bursary.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
//   { path: "dashboard", component: DashboardComponent },
//   { path: "icons", component: IconsComponent },
  { path: "bursary", component: BursaryComponent },
//   { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "results", component: ResultsComponent },
//   { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
