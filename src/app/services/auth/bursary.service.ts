import { Injectable } from '@angular/core';
import { ServerDetails } from '../serverDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth-service.service';
import { Student } from 'src/app/models/student';

@Injectable({
	providedIn: 'root'
})
export class BursaryService {
	private serverDetails: ServerDetails = new ServerDetails();
	constructor(
		private _http:HttpClient,
		private auth:AuthService
	) { }

	public updateBursary(student_id){
		const data = {
			id:student_id
		}
		const headers = new HttpHeaders({'content-type':'application/json; charset=utf-8'});
		this._http.post(`${this.serverDetails.serverDetailsForApi}/statement.read.php`,data,{headers:headers}).subscribe(bursary=>{
			let currentStudent = this.auth.currentStudent()
			// console.log(currentStudent.studentBursaryData)
			currentStudent.studentBursaryData = bursary.records[0].studentBursaryData
			// console.log(bursary.records[0].studentBursaryData)
			// console.log(currentStudent.studentBursaryData)
			// console.log(this.auth.currentStudent());
			// console.log(currentStudent)

			localStorage.setItem('currentStudent', JSON.stringify(currentStudent))

		});
	}

}
