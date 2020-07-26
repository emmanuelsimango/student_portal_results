import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { StudentPersonal } from 'src/app/models/student-personal';

@Component({
	selector: "app-user",
	templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
	student:Student;
	studentPersonal:StudentPersonal
	constructor(
		public auth: AuthService
	) {
		this.student =	this.auth.currentStudent()
		this.studentPersonal = JSON.parse(this.student.studentPersonalData);
		console.log(this.studentPersonal);

	}

	ngOnInit() { }
}
