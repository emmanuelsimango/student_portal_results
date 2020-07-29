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
		const studentPersonalData: StudentPersonal = JSON.parse(this.student.studentPersonalData)
		try {
			// console.log(this.student.studentBursaryData);

			this.studentBursary = JSON.parse(this.student.studentBursaryData).transaction;

			this.total = 0
			this.studentBursary.forEach(tr => {
				this.total = this.total + parseFloat(tr.trans_value + '')
				// console.log(this.total);
			});
			if (this.total > 0) {
				const notice: Notice = { title: 'Fees Payment Notice', body: `Hie ${studentPersonalData.fname} ${studentPersonalData.lname}, you have a pending fees payment of $${this.total}`, class: "modal-danger" }
				this.auth.has_Message.next(notice);
				this.router.navigate(['bursary']);
				return false;

			}
			return true
		} catch (error) {
			const notice: Notice = { title: 'Results Notice', body: `Hie ${studentPersonalData.fname} ${studentPersonalData.lname}, your results are not yet available, please try again later`, class: "modal-danger" }
			this.auth.has_Message.next(notice);
			this.router.navigate(['bursary']);
			return false;
		}

	}

}
