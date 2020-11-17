import { StudentSettings } from './student-settings';
import { Profile } from './profile';
import { Registration } from './registration';
import { Student_account_status } from './student_account_status';
import { BursaryStatement } from './bursaryStatement';
import { Notice } from './notice';
import { Vle } from './vle';

export interface Student {
	"studentId" : number,
	"profile":Profile,
	"registration":Registration,
	"accounts":Student_account_status,
	"bursary":BursaryStatement,
	"notice":Notice[],
    "studentPersonalData" : any,
    "studentSettings" : any,
	"studentContactsData" : any,
	"studentResultsData":any,
	"studentModulesData":any,
	"isactive" : 0,
	"vle":Vle
}
