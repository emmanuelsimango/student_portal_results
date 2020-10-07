import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Module } from 'src/app/models/module';
import { RegistrationModule } from 'src/app/models/RegistrationModule';
import { RegistrationTemplate } from 'src/app/models/registrationTemplate';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { BursaryService } from 'src/app/services/auth/bursary.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ModuleService } from 'src/app/services/moduleService.service';
import { ServerDetails } from 'src/app/services/serverDetails';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	serverDetails:ServerDetails = new ServerDetails()
	regTemplate:RegistrationTemplate;
	regModuleTemplate: any[]
	moduleTemplate:Module
	msg:String;
	balance:number
	constructor(
		private moduleService:ModuleService,
		private bursaryService:BursaryService,
		private loader:LoaderService,
		public auth:AuthService,
		private modalService: NgbModal,
	) {
		this.loader.is_loading.next(true)
		this.moduleService.getRegistrationRequirements().subscribe(response=>{
			const balance = this.bursaryService.getBalance();
			this.balance = balance
			this.regTemplate = response


			if (response.body.module) {
				console.log(response.body.module);

				console.log(Object.entries(response.body.module));

				this.regModuleTemplate = Object.entries(response.body.module);
				this.regModuleTemplate.forEach(mod=>{
					console.log(mod[1]);

				})

			}



			this.loader.is_loading.next(false)

		},(error=>{this.loader.is_loading.next(false)}));
	}

	ngOnInit(): void {
	}

	confirmRegistration(modal:NgbModal){
		this.loader.is_loading.next(true)
		const balance = this.bursaryService.getBalance();
		this.balance = balance
		// if (this.balance > this.regTemplate.body.fees) {
		// 	this.msg = "You have insufficient balance to register online";
		// 	this.modalService.open(modal)
		// 	this.loader.is_loading.next(false)
		// 	return
		// }
		this.moduleService.confirmRegistration().subscribe(response=>{
			if(response.body.error){
				this.msg = response.body.message
				this.modalService.open(modal)
				this.loader.is_loading.next(false)
				return;
			}else{
				this.msg = "You've Successfully Registered";

			}
			this.modalService.open(modal)
			this.loader.is_loading.next(false)
			window.location.href = this.serverDetails.serverIp;
		},(error=>{
			this.loader.is_loading.next(false)
		}));
	}



}
