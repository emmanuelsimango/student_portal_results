import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { Profile } from 'src/app/models/profile';

@Component({
	selector: "app-user",
	templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
	student:Student;
	profile:Profile;
	reg_number: String
	constructor(
		public auth: AuthService
	) {
		this.student =	this.auth.currentStudent();
		this.profile = this.student.profile;
		this.reg_number = JSON.parse(localStorage.getItem('auth')).reg_number

	}

	ngOnInit() { }
}
