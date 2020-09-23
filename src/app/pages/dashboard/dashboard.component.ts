import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { Student } from 'src/app/models/student';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { BursaryService } from 'src/app/services/auth/bursary.service';
import { Statement } from 'src/app/models/statement';
import { ModalModule } from 'ngb-modal';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/services/loader.service';

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
		public bursary:BursaryService,
		public toast:ToastrService,
		public loader:LoaderService

	) {
		this.student = this.auth.is_Authenticated();
		this.statements = this.student.bursary.statements

	}

	ngOnInit() {

	}

	activateWifi(){
		this.loader.is_loading.next(true);
		this.auth.activateWifi().subscribe(response=>{

			if (response.body.error) {
				this.toast.error(response.body.message);
			}else{
				this.toast.success(response.body.message);
			}
			this.loader.is_loading.next(false)
		},(error=>{
			console.log(error)
			this.loader.is_loading.next(false)
		}))
	}

}
