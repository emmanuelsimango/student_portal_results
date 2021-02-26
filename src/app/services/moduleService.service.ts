import { Injectable } from '@angular/core';
import { ServerDetails } from './serverDetails';
import { Module } from '../models/module';
import { HttpClient } from '@angular/common/http';
import { MyAuth } from '../models/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth-service.service';
import { Student } from '../models/student';
import { map } from 'rxjs/operators';
import { Registration } from '../models/registration';
import { RegistrationTemplate } from '../models/registrationTemplate';

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

	getRegistrationRequirements():Observable<RegistrationTemplate>{
		// console.log(`${this.serverDetails.studentServerDetails}/api/getNextLevelRegistrationRequirements/${this.auth.getAuth().reg_number}/${this.auth.getAuth().token}`)
		return this._http.
						get<RegistrationTemplate>(`${this.serverDetails.studentServerDetails}/api/getNextLevelRegistrationRequirements/${this.auth.getAuth().reg_number}/${this.auth.getAuth().token}`).
							pipe(map(response=>{
								console.log(response)
								if(response.body.module){
									response.body.module= this.convertObjectToIterable(response.body.module)
								}
								return response;
							}));
	}

	convertObjectToIterable(myObj):any {
		const spaghettiProperties = Object.keys(myObj);

		// Step 2. Create an empty array.
		const neededArray = [];

		// Step 3. Iterate throw all keys.
		let i = 0;
		for (let prop of spaghettiProperties ) {
			neededArray.push(myObj[prop]);
			// neededArray[i].['name'] = prop;

			i++;
		}
		return neededArray
	}

	confirmRegistration(choice):Observable<any>{
		return this._http.get<any>(`${this.serverDetails.studentServerDetails}/api/confirmRegistration/${this.auth.getAuth().reg_number}/${this.auth.getAuth().token}/${choice}`)
	}

}
