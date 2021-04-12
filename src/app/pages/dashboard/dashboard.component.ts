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
import { NoticeService } from "src/app/services/notice.service";

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
		private router:Router,
		private noticeService:NoticeService

	) {
		this.student = this.auth.is_Authenticated();
		this.statements = this.student.bursary.statements;
		// this.noticeService.getStudentsNotice().subscribe(notice=>{
		// 	console.log(notice);

		// })
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

	getNextRegistration(modal:NgbModal){
		this.loader.is_loading.next(true)
		// alert("pano	")
		this.moduleService.getRegistrationRequirements().subscribe(response=>{
			// console.log(response);

			if (!response.valid) {
				window.location.href = this.serverDetails.logoutURL;
			}
			if (!response.body.open) {
				this.msg = "Online Registration for this period is  not active!!"
				this.modalService.open(modal)
			}else if(response.body.open){
				this.router.navigate(['register'])
			}

			this.loader.is_loading.next(false);
		},	(error=>{
			console.log(error);

			this.loader.is_loading.next(false)
		}));
	}

	canGetAccomodation():boolean{
		return this.student.registration.program.level == "1.1";
	}

}
