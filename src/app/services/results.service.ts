import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerDetails } from './serverDetails';
import { AuthService } from './auth/auth-service.service';
import { Student } from '../models/student';
import { MyAuth } from '../models/auth';
import { Result } from '../models/result';
import { Observable } from 'rxjs';
import { StudentPeriod } from '../models/student_periods';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ResultsService {
	private serverDetails:ServerDetails = new ServerDetails();
	constructor(
		private http: HttpClient,
		private auth: AuthService
	) {

	}

	// public updateResults(){
	// 	let student:Student = this.auth.currentStudent();
	// 	let myAuth:MyAuth = JSON.parse(localStorage.getItem('auth'));
	// 	let headers:HttpHeaders = new HttpHeaders();
	// 	headers.append('content-type','application/json');

	// 	this.http.post<any>(`${this.serverDetails.serverDetails}/student.signin.php`,JSON.stringify({myid:myAuth.reg_number,mycode:myAuth.token,token:1}),{headers:headers}).subscribe(student=>{
	// 		let st:Student = student.records[0];
	// 		// console.log(st)
	// 		let currentStudent:Student = this.auth.currentStudent();
	// 		currentStudent.studentResultsData = JSON.parse(st.studentResultsData);
	// 		this.auth.updateStudent(currentStudent);
	// 		// console.log(currentStudent);
	// 	})
	// }

	public getPeriods():Observable<StudentPeriod[]>{
		return this.http.get<any>(`${this.serverDetails.studentServerDetails}/api/getAllStudentPeriods/${this.auth.getAuth().reg_number}/${this.auth.getAuth().token}`)
		.pipe(
			map(info=>{
				let periods:StudentPeriod[] = null;
				if (info.valid) {
					periods	= info.body
					console.log(periods);

				}
				return periods;
			}),
		);
	}

	public getResults(period):Observable<Result>{
		const myAuth:MyAuth = JSON.parse(localStorage.getItem('auth'));


		if(period){
		 return	this.http.get<Result>(`${this.serverDetails.studentServerDetails}/api/getMyResults/${myAuth.reg_number}/${myAuth.token}?p=${period}`);
		}
		return this.http.get<Result>(`${this.serverDetails.studentServerDetails}/api/getMyResults/${myAuth.reg_number}/${myAuth.token}?p=${this.auth.is_Authenticated().registration.period.period_id}`);
	}

}
