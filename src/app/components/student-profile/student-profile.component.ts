import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentPersonal } from 'src/app/models/student-personal';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Profile } from 'src/app/models/profile';
import { MyAuth } from 'src/app/models/auth';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

	student:Student;
	profile:Profile;
	myAuth:MyAuth;
	constructor(
		public auth: AuthService
	) {
		this.student =	this.auth.currentStudent();
		try {
		this.profile = this.student.profile;
			 this.myAuth = JSON.parse(localStorage.getItem('auth'));
		 } catch (error) {
			console.log(error);

		 }


	}
	ngOnInit(): void {

	}
}
