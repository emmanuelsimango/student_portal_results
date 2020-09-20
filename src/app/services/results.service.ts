import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerDetails } from './serverDetails';
import { AuthService } from './auth/auth-service.service';
import { Student } from '../models/student';
import { MyAuth } from '../models/auth';
import { Result } from '../models/result';
import { Observable } from 'rxjs';

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

	public getResults(period):Observable<Result>{
		const myAuth:MyAuth = JSON.parse(localStorage.getItem('auth'));
		if(period){
			this.http.get<Result>(`${this.serverDetails.studentServerDetails}/api/getMyResults/${myAuth.reg_number}/${myAuth.token}?p=${period}`);
		}
		return this.http.get<Result>(`${this.serverDetails.studentServerDetails}/api/getMyResults/${myAuth.reg_number}/${myAuth.token}?p=${this.auth.is_Authenticated().registration.period.period_id}`);
	}

}
