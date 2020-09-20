import { Injectable } from '@angular/core';
import { ServerDetails } from './serverDetails';
import { Module } from '../models/module';
import { HttpClient } from '@angular/common/http';
import { MyAuth } from '../models/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth-service.service';
import { Student } from '../models/student';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ModuleService {
	serverDetails: ServerDetails = new ServerDetails();

	constructor(
		private _http: HttpClient,
		private auth: AuthService
	) {
	}

	updateModules(): Observable<Module[]> {
		const myAuth: MyAuth = JSON.parse(localStorage.getItem('auth'))
		return this._http.get<Module[]>(`${this.serverDetails.studentServerDetails}/api/getMyModules/${myAuth.reg_number}/${myAuth.token}`).pipe(
			map(info=>{
				const student:Student = this.auth.currentStudent();
				student.registration.modules = info;
				
				localStorage.setItem('currentStudent',JSON.stringify(student))
				return info
			}),
		);
	}

}
