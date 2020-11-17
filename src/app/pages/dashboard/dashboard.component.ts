import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { Student } from 'src/app/models/student';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { BursaryService } from 'src/app/services/auth/bursary.service';
import { Statement } from 'src/app/models/statement';
import { ModalModule } from 'ngb-modal';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/services/loader.service';
import { ModuleService } from 'src/app/services/moduleService.service';
import { ServerDetails } from 'src/app/services/serverDetails';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
	selector: "app-dashboard",
	templateUrl: "dashboard.component.html",
	styleUrls: ["dashboard.component.scss"],
	providers: [BursaryService]
})
export class DashboardComponent implements OnInit {
	student:Student;
	statements: Statement[];
	serverDetails:ServerDetails = new ServerDetails();
	msg:String
	constructor(
		public auth:AuthService,
		public bursary:BursaryService,
		public toast:ToastrService,
		public loader:LoaderService,
		private moduleService:ModuleService,
		private modalService: NgbModal,
		private router:Router

	) {
		this.student = this.auth.is_Authenticated();
		this.statements = this.student.bursary.statements;

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
				this.auth.refresh()
			}
			this.loader.is_loading.next(false)

		},(error=>{
			console.log(error)
			this.loader.is_loading.next(false)
		}))
	}

	getNextRegistration(modal:NgbModal){
		this.loader.is_loading.next(true)
		this.moduleService.getRegistrationRequirements().subscribe(response=>{
			if (!response.valid) {
				window.location.href = this.serverDetails.logoutURL;
			}
			if (!response.body.open) {
				this.msg = "Your registration minimum payment configuration are pending, please contact Bursary office on +263 67 2122203-5 Exension 1127"
				this.modalService.open(modal)
			}else if(response.body.open){
				// const balance = this.bursary.getBalance();
				// if(balance>response.body.fees){
				// 	this.msg = "You have insufficient funds!!";
				// 	this.modalService.open(modal);
				// 	this.loader.is_loading.next(false);
				// 	return;
				// }
				this.router.navigate(['register'])
			}

			this.loader.is_loading.next(false);
		},	(error=>{console.log(error); this.loader.is_loading.next(false)}));
	}

}
