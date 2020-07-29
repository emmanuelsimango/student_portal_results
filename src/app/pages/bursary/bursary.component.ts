import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { Transaction } from 'src/app/models/Transaction';
import { BursaryService } from 'src/app/services/auth/bursary.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
	selector: "app-bursary",
	templateUrl: "bursary.component.html"
})
export class BursaryComponent implements OnInit {
	total:number;
	student:Student;
	studentBursary: Transaction[];
	bursaryError:boolean;
	constructor(
		private auth: AuthService,
		private bursary:BursaryService,
		private router:Router,
		private loader:LoaderService
	) {
		this.initStudent();
		// console.log(this.total);


	}

	initStudent(){
		this.student = this.auth.currentStudent();
		// console.log(this.student.studentBursaryData);

		try {
			this.studentBursary = JSON.parse(this.student.studentBursaryData).transaction;

			this.total = 0
			this.studentBursary.forEach(tr => {

				this.total = this.total +  parseFloat(tr.trans_value+'')

			});
		} catch (error) {

		}

	}
	ngOnInit() {

	}
	public refresh() {
		this.bursary.updateBursary(this.student.studentId)
		this.initStudent();
	}
}
