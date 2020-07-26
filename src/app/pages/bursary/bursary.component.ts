import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { Transaction } from 'src/app/models/Transaction';


@Component({
	selector: "app-bursary",
	templateUrl: "bursary.component.html"
})
export class BursaryComponent implements OnInit {
	student:Student;
	studentBursary: Transaction[];
	constructor(
		private auth: AuthService
	) {
		this.student = this.auth.currentStudent();
		this.studentBursary = JSON.parse(this.student.studentBursaryData).transaction;
		console.log(this.studentBursary);

	}

	ngOnInit() {

	}
	public updateOptions() {

	}
}
