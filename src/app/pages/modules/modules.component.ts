import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { Module } from 'src/app/models/module';

declare const google: any;


@Component({
	selector: "app-map",
	templateUrl: "modules.component.html",
	styleUrls: ["modules.component.scss"]
})
export class ModulesComponent implements OnInit {
	student: Student;
	modules:Module[]
	constructor(
		private auth: AuthService
	) {
		this.student = this.auth.is_Authenticated();
		this.modules = this.student.registration.modules;
		console.log(this.modules);

	}

	ngOnInit() {

	}
}
