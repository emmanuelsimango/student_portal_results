import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentPersonal } from 'src/app/models/student-personal';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

	student:Student;
	studentPersonal:StudentPersonal
	constructor(
		public auth: AuthService
	) {
		this.student =	this.auth.currentStudent()
		this.studentPersonal = JSON.parse(this.student.studentPersonalData);


	}
	ngOnInit(): void {

	}
}
