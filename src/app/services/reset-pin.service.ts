import { Injectable } from '@angular/core';
import { ServerDetails } from './serverDetails';
import { HttpClient } from '@angular/common/http';
import { MyAuth } from '../models/auth';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ResetPinService {
	serverDetails:ServerDetails = new ServerDetails();
	constructor(
		private _http:HttpClient
	) {

	 }

	 public resetPin(pin,password):Observable<any>{
		 const myAuth:MyAuth = JSON.parse(localStorage.getItem('auth'));
		let formData:FormData = new FormData();
		formData.append('pin',pin);
		formData.append('password',password);
		return this._http.post(`${this.serverDetails.studentServerDetails}/api/resetMyCardPin/${myAuth.reg_number}/${myAuth.token}`,formData);
	 }

}
