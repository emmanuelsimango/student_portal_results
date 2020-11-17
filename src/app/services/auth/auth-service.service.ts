import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerDetails } from '../serverDetails';
import { Student } from 'src/app/models/student';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Notice } from 'src/app/models/notice';
import { MyAuth } from 'src/app/models/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	_serverDetails:ServerDetails = new ServerDetails();
	private _currentStudentSubject:BehaviorSubject<Student> = new BehaviorSubject<Student>(JSON.parse(localStorage.getItem('currentStudent')))
	public has_Message:BehaviorSubject<Notice> = new BehaviorSubject<Notice>(null);
	public has_Notice: BehaviorSubject<Notice[]> = new BehaviorSubject<Notice[]>(null);;

	// public currentStudent: Observable<Student>;


	constructor(private _http:HttpClient,private router:Router) { }

	public is_Authenticated(): Student {

		return this._currentStudentSubject.value;
	}

	public refresh(){
		window.location.href = this._serverDetails.portalURL;
	}

	public updateStudent(student:Student){
		localStorage.setItem('currentStudent',JSON.stringify(student))
	}
	// public updateStudentData(){
	// 	return this._http.post<any>(`${this._serverDetails.studentServerDetails}/api/getHomeData/${this.getAuth().reg_number}/${this.getAuth().token}`,this.getAuth())
	// 	.pipe(map(response => {
	// 		console.log(response)
	// 		// login successful if there's a jwt token in the response when using laravel passport
	// 		if (response.body) {
	// 			// store user details and jwt token in local storage to keep user logged in between page refreshes
	// 			localStorage.setItem('currentStudent', JSON.stringify(response.body));
	// 			this._currentStudentSubject.next(response.body);
	// 			this.router.navigate(['dashboard'])
	// 		}else{
	// 			this.router.navigateByUrl(this._serverDetails.loginURL+"?e=1");

	// 		}

	// 		return response.body;
	// 	}));
	// }
	public studentSubject():BehaviorSubject< Student>{
		return this._currentStudentSubject
	}

	public currentStudent(){
		if (this.is_Authenticated) {
			// return <Student>JSON.parse(localStorage.getItem('currentStudent')).records[0]
			const myAuth:MyAuth = JSON.parse(localStorage.getItem('auth'));
			this.tokenValid(myAuth.reg_number,myAuth.token)
			return JSON.parse(localStorage.getItem('currentStudent'))
		}
		localStorage.clear();
		window.location.href = this._serverDetails.logoutURL;
		return false;
		// return this.router.navigateByUrl(this._serverDetails.loginURL);
	}
	public getAuth():MyAuth{
		return JSON.parse(localStorage.getItem('auth'))
	}

	public activateWifi():Observable<any>{
		return this._http.get(`${this._serverDetails.studentServerDetails}/api/changeWifi/${this.getAuth().reg_number}/${this.getAuth().token}`);
	}

	// public login(reg,pass){
	// 	const data = {
	// 		myid:reg.toUpperCase(),
	// 		mycode:pass
	// 	};

	// 	const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
	// 	return this._http.post<any>(`${this._serverDetails.serverDetailsForApi}/student.signin.php`,data,{headers:headers})
	// 	.pipe(map(student => {
	// 		// console.log(student)
	// 		// login successful if there's a jwt token in the response when using laravel passport
	// 		if (student) {
	// 			// store user details and jwt token in local storage to keep user logged in between page refreshes
	// 			localStorage.setItem('currentStudent', JSON.stringify(student.records[0]));
	// 			this._currentStudentSubject.next(student);

	// 		}

	// 		return student;
	// 	}));
	// }

	public tokenValid(reg,token){
		 this._http.get<any>(`${this._serverDetails.studentServerDetails}/api/validateToken/${reg}/${token}`).subscribe(response=>{
			if (!response.valid) {
				localStorage.clear()
				window.location.href = this._serverDetails.logoutURL
			}


		});
	}

	public auth(reg,token){
		const myAuth:MyAuth = {reg_number:reg,token:token};

		localStorage.setItem('auth',JSON.stringify(myAuth))
		const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
		console.log(`${this._serverDetails.studentServerDetails}/api/getHomeData/${reg}/${token}`)
		return this._http.post<any>(`${this._serverDetails.studentServerDetails}/api/getHomeData/${reg}/${token}`,myAuth,{headers:headers})
		.pipe(map(response => {
			console.log(response)
			// login successful if there's a jwt token in the response when using laravel passport
			if (response.body) {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('currentStudent', JSON.stringify(response.body));
				this._currentStudentSubject.next(response.body);

			}else{
				this.router.navigateByUrl(this._serverDetails.loginURL+"?e=1");

			}

			return response.body;
		}));
	}

	logout() {

		localStorage.clear();

        // localStorage.removeItem('currentStudent');
		this._currentStudentSubject.next(null);
		this.router.navigateByUrl(this._serverDetails.logoutURL);
		// console.log('pano',this._serverDetails.loginURL);
		window.location.href = this._serverDetails.logoutURL;

	}
	public vleLink():string {
		const myAuth:MyAuth = JSON.parse(localStorage.getItem('auth'));
		return `${this._serverDetails.vleLink}/${myAuth.reg_number}/${myAuth.token}`;

	}
}
