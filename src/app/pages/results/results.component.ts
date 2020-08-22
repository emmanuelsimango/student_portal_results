import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { Result } from 'src/app/models/result';
import { StudentPersonal } from 'src/app/models/student-personal';

@Component({
	selector: "app-results",
	templateUrl: "results.component.html"
})
export class ResultsComponent implements OnInit {
	student:Student;
	studentResults: Result[];
	selectedResult:Result;
	resultOveral:Result
	constructor(
		private auth:AuthService
	) {

	 }

	ngOnInit() {
		this.student = this.auth.currentStudent();
		try {
			this.studentResults = JSON.parse(this.student.studentResultsData).results;
			this.selectedResult = this.studentResults[0];
			console.log(this.selectedResult);

		} catch (error) {
			console.log(error);

		}
	 }
}
