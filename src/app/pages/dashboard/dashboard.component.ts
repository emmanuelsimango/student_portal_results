import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { Student } from 'src/app/models/student';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { BursaryService } from 'src/app/services/auth/bursary.service';
import { Statement } from 'src/app/models/statement';
import { ModalModule } from 'ngb-modal';

@Component({
	selector: "app-dashboard",
	templateUrl: "dashboard.component.html",
	styleUrls: ["dashboard.component.scss"],
	providers: [BursaryService]
})
export class DashboardComponent implements OnInit {
	student:Student;
	statements: Statement[]
	constructor(
		public auth:AuthService,
		public bursary:BursaryService
	) {
		this.student = this.auth.is_Authenticated();
		this.statements = this.student.bursary.statements

	}

	ngOnInit() {





	}

}
