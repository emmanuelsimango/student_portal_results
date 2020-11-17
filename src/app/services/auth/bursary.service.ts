import { Injectable } from '@angular/core';
import { ServerDetails } from '../serverDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth-service.service';
import { Student } from 'src/app/models/student';
import { LoaderService } from '../loader.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Statement } from '@angular/compiler';
import { BursaryStatement } from 'src/app/models/bursaryStatement';
import { state } from '@angular/animations';
import { MyAuth } from 'src/app/models/auth';
import { map } from 'rxjs/operators';

interface serverData {
	'records': any
}
@Injectable({
	providedIn:'root'
})
export class BursaryService {
	private serverDetails: ServerDetails = new ServerDetails();
	private balance: BehaviorSubject<number> = new BehaviorSubject(0);
	private student: Student;
	constructor(
		private _http: HttpClient,
		private auth: AuthService,
		private loader: LoaderService
	) {
		this.setBalance();
	}



	public updateBursary2() {
		const data: MyAuth = JSON.parse(localStorage.getItem('auth'))
		this.loader.is_loading.next(true);
		const headers = new HttpHeaders({ 'content-type': 'application/json; charset=utf-8' });
		this._http.post<any>(`${this.serverDetails.portalURL}/index.php/cut_elearning/api/getMyBursary/${data.reg_number}/${data.token}`, data, { headers: headers }).subscribe(bursary => {
			let currentStudent = this.auth.currentStudent()

			currentStudent.bursary = bursary.body


			localStorage.setItem('currentStudent', JSON.stringify(currentStudent))
			this.loader.is_loading.next(false);
		});
	}

	public getStatement():Observable<any> {
		const data: MyAuth = JSON.parse(localStorage.getItem('auth'))
		this.loader.is_loading.next(true);
		const headers = new HttpHeaders({ 'content-type': 'application/json; charset=utf-8' });
		return this._http.post<any>(`${this.serverDetails.portalURL}/index.php/cut_elearning/api/getMyBursary/${data.reg_number}/${data.token}`, data, { headers: headers })
			.pipe(
				map(bursary => {
					let currentStudent:Student = this.auth.currentStudent()
					// console.log(bursary);
					currentStudent.bursary = bursary.body

					// localStorage.setItem('currentStudent', JSON.stringify(currentStudent))
					localStorage.setItem('currentStudent',JSON.stringify(currentStudent))
					this.loader.is_loading.next(false)
					return bursary.body;
				})
			);
	}

	public setBalance() {
		this.student = this.auth.currentStudent();
		const statement: BursaryStatement = this.student.bursary;

		if (statement) {
			let credit: number = 0;
			let debit: number = 0;
			console.log(statement);

			statement.statements.forEach(sta => {
				credit += parseFloat(sta.credit.toString());
				debit += parseFloat(sta.debit.toString());
			})
			console.log(debit, credit);

			this.balance.next(debit - credit);
		}
	}

	public getBalance(): number {
		return this.balance.value
	}


}
