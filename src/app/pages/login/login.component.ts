import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	loading: boolean;
	reg_number = "";
	password = "";
	loginError: boolean;
	submitted: boolean;
	returnUrl: string;
	constructor(
		private formBuilder: FormBuilder,
		private auth: AuthService,
		private route: ActivatedRoute,
		private router: Router,
		private loader:LoaderService
	) { }

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			reg_number: ['', Validators.required],
			password: ['', Validators.required]
		});


		// get return url from route parameters or default to '/'
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/results';
		if(this.auth.is_Authenticated){
			this.router.navigate([this.returnUrl]);
		}
	}

	// convenience getter for easy access to form fields
	get f() { return this.loginForm.controls; }



	login() {
		this.submitted = true;
		this.loader.is_loading.next(true)
		// stop here if form is invalid
		if (this.loginForm.invalid) {
			// alert('invalid')
			console.log(this.f.password.invalid);
			return;
		}




	}



}
