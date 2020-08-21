import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerDetails } from '../serverDetails';
import { Student } from 'src/app/models/student';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Notice } from 'src/app/models/notice';

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
	public studentSubject():BehaviorSubject< Student>{
		return this._currentStudentSubject
	}

	public currentStudent(){
		if (this.is_Authenticated) {
			// return <Student>JSON.parse(localStorage.getItem('currentStudent')).records[0]
			return JSON.parse(localStorage.getItem('currentStudent'))
		}
		return this.router.navigate(['auth']);
	}

	public login(reg,pass){
		const data = {
			myid:reg.toUpperCase(),
			mycode:pass
		};

		const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
		return this._http.post<any>(`${this._serverDetails.serverDetailsForApi}/student.signin.php`,data,{headers:headers})
		.pipe(map(student => {
			// console.log(student)
			// login successful if there's a jwt token in the response when using laravel passport
			if (student) {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('currentStudent', JSON.stringify(student.records[0]));
				this._currentStudentSubject.next(student);

			}

			return student;
		}));
	}

	public auth(reg,token){
		const data = {
			myid:reg.toUpperCase(),
			mycode:token
		};

		localStorage.setItem('auth',JSON.stringify(data))
		const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
		console.log(`${this._serverDetails.studentServerDetails}/api/getHomeData/C16127442T/QzE2MTI3NDQyVDoyMDIwLTA4LTIxIDE0OjI3OjE1`)
		return this._http.post<any>(`${this._serverDetails.studentServerDetails}/api/getHomeData/C16127442T/QzE2MTI3NDQyVDoyMDIwLTA4LTIxIDE0OjI3OjE1`,data,{headers:headers})
		.pipe(map(response => {
			console.log(response)
			// login successful if there's a jwt token in the response when using laravel passport
			if (response) {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('currentStudent', JSON.stringify(response));
				this._currentStudentSubject.next(response.body);

			}

			return response.body;
		}));
	}

	logout() {
        // remove student from local storage to log student out
        localStorage.removeItem('currentStudent');
		this._currentStudentSubject.next(null);
		this.router.navigateByUrl('https://cut.ac.zw/portal/login');
    }
}
