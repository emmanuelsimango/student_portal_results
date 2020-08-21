import { Component, OnInit } from '@angular/core';
import { ServerDetails } from 'src/app/services/serverDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth-service.service';


@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
	serverDetails = new ServerDetails();
	regNumber: String;
	token: String;
	returnUrl: string;
	constructor(
		private route: ActivatedRoute,
		private auth: AuthService,
		private router:Router

	) {
	}

	ngOnInit() {
		this.regNumber = this.route.snapshot.paramMap.get('reg');
		this.token = this.route.snapshot.paramMap.get('token');

		if (this.regNumber && this.token) {
			// get return url from route parameters or default to '/'
			this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
			this.auth.auth(this.regNumber, this.token).subscribe(info=>{
				if (info) {
					console.log(this.returnUrl);

					this.router.navigate([this.returnUrl]);
				}
			},(error=>{console.log(error)}))


		}

	}



}
