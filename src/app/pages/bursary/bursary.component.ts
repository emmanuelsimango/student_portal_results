import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { Transaction } from 'src/app/models/Transaction';
import { BursaryService } from 'src/app/services/auth/bursary.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { Statement } from 'src/app/models/statement';


@Component({
	selector: "app-bursary",
	templateUrl: "bursary.component.html",
	styleUrls: ["./bursary.component.scss"],
	providers: [BursaryService ]
})
export class BursaryComponent implements OnInit {
	page = 1;
	pageSize = 10
	total: number;
	student: Student;
	statements: Statement[];
	bursaryError: boolean;
	constructor(
		private auth: AuthService,
		public bursary: BursaryService,
		private router: Router,
		private loader: LoaderService
	) {
		this.student = this.auth.is_Authenticated();
		this.statements = this.student.bursary.statements;
		this.bursary.getStatement().subscribe(statement=>{
			console.log(statement);
			this.statements = statement.statements

		});
		console.log(this.statements.length);



	}

	initStudent() {
		this.student = this.auth.currentStudent();
		// console.log(this.student.studentBursaryData);



	}
	ngOnInit() {

	}
	public refresh() {
		this.bursary.updateBursary2()
		this.initStudent();
	}
}
