import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DataTablesModule } from 'angular-datatables';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './pages/login/login.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/auth/error/error.component';


@NgModule({
	imports: [
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		ComponentsModule,
		NgbModule,
		DataTablesModule,
		RouterModule,
		ReactiveFormsModule,
		AppRoutingModule,
		ToastrModule.forRoot()
	],
	declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent, NoticesComponent, NoticeComponent, ErrorComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
