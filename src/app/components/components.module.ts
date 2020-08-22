import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NoticeModalComponent } from './notice-modal/notice-modal.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { LoaderComponent } from './loader/loader.component';
import { BreadComponent } from './bread/bread.component';
import { DashNoticeModalComponent } from './dashNoticeModal/dashNoticeModal.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, NoticeModalComponent, StudentProfileComponent, LoaderComponent,BreadComponent,DashNoticeModalComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent,NoticeModalComponent,StudentProfileComponent,LoaderComponent,BreadComponent,DashNoticeModalComponent]
})
export class ComponentsModule {}
