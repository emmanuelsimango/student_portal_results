import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerDetails } from '../serverDetails';
import { Student } from 'src/app/models/student';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	_serverDetails:ServerDetails = new ServerDetails();
	private _currentStudentSubject:BehaviorSubject<Student> = new BehaviorSubject<Student>(JSON.parse(localStorage.getItem('currentStudent')))
	// public currentStudent: Observable<Student>;


	constructor(private _http:HttpClient,private router:Router) { }

	public is_Authenticated(): Student {

		return this._currentStudentSubject.value;

	}

	public currentStudent(){
		if (this.is_Authenticated) {
			return JSON.parse(localStorage.getItem('currentStudent')).records[0]
		}
		return this.router.navigate(['login']);
	}
	public login(reg,pass){
		const data = {
			myid:reg,
			mycode:pass
		};

		  const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
		return this._http.post<any>(`${this._serverDetails.serverDetailsForApi}/student.signin.php`,data,{headers:headers})
		.pipe(map(student => {
			// console.log(student)
			// login successful if there's a jwt token in the response when using laravel passport
			if (student) {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('currentStudent', JSON.stringify(student));
				this._currentStudentSubject.next(student);

			}

			return student;
		}));
	}
	logout() {
        // remove student from local storage to log student out
        localStorage.removeItem('currentStudent');
		this._currentStudentSubject.next(null);
		this.router.navigate(['login']);
    }
}
