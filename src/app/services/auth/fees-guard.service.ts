import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { Notice } from 'src/app/models/notice';
import { Student } from 'src/app/models/student';
import { Transaction } from 'src/app/models/Transaction';
import { StudentPersonal } from 'src/app/models/student-personal';
import { BursaryService } from './bursary.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class FeesGuardService implements CanActivate {
	student: Student;
	studentBursary: Transaction[];
	total: number;
	constructor(private auth: AuthService, private router: Router,private bursary:BursaryService, private toastService:ToastrService) {

	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

		this.student = this.auth.currentStudent();
		const balance = parseFloat(this.bursary.getBalance().toString());

		if (balance > 0) {
			this.toastService.error(`Hie, ${this.student.profile.first_name} ${this.student.profile.surname}, you cannot view results right now because of the pending balance of $${balance}`,'Results display error')
			this.router.navigate(['bursary'])
		}
		return balance <= 0;
		// return false;


	}

}
