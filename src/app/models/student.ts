import { StudentPersonal } from './student-personal';
import { StudentSettings } from './student-settings';
import { StudentContact } from './student-contact';
import { Profile } from './profile';
import { Registration } from './registration';
import { Student_account_status } from './student_account_status';
import { BursaryStatement } from './bursaryStatement';

export interface Student {
	"studentId" : number,
	"profile":Profile,
	"registration":Registration,
	"accounts":Student_account_status,
    "studentPersonalData" : any,
    "studentSettings" : any,
	"studentContactsData" : any,
	"studentResultsData":any,
	"studentModulesData":any,
	"bursary":BursaryStatement,
	"isactive" : 0,
	"vle":any
}
