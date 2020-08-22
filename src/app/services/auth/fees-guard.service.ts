import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { Notice } from 'src/app/models/notice';
import { Student } from 'src/app/models/student';
import { Transaction } from 'src/app/models/Transaction';
import { StudentPersonal } from 'src/app/models/student-personal';

@Injectable({
	providedIn: 'root'
})
export class FeesGuardService implements CanActivate {
	student: Student;
	studentBursary: Transaction[];
	total: number;
	constructor(private auth: AuthService, private router: Router) {

	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

		this.student = this.auth.currentStudent();
		return true;


	}

}
