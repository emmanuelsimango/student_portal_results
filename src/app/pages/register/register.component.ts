import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
	msg:String;
	balance:number;
	hasManyTemplates:boolean;
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
			console.log(this.regTemplate.body.module);
			// this.convertObjectToIterable(this.regTemplate.body.module);
			console.log(response);

			this.loader.is_loading.next(false)

		},(error=>{this.loader.is_loading.next(false)}));
	}

	ngOnInit(): void {
	}

	objectLength(myObj):number{
		return Object.keys(myObj).length
	}

	convertObjectToIterable(myObj){
		const spaghettiProperties = Object.keys(myObj);

		// Step 2. Create an empty array.
		const neededArray = [];

		// Step 3. Iterate throw all keys.
		let i = 0;
		for (let prop of spaghettiProperties ) {
			neededArray.push(myObj[prop]);
			// neededArray[i].['name'] = prop;

			i++;
		}
		console.log(neededArray)
	}

	confirmRegistration(modal:NgbModal,choice){
		this.loader.is_loading.next(true)
		const balance = this.bursaryService.getBalance();
		this.balance = balance

		console.log(choice)
		this.moduleService.confirmRegistration(choice).subscribe(response=>{
			console.log(response)
			if(response.body?.error){
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
			console.log(error)
			// this.msg = "Failed to register, please try again later!!"
			// this.modalService.open(modal)
			this.loader.is_loading.next(false)
			window.location.href = this.serverDetails.serverIp;
		}));
	}



}
