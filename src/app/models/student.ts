import { StudentPersonal } from './student-personal';
import { StudentSettings } from './student-settings';
import { StudentContact } from './student-contact';

export interface Student {
    "studentId" : number,
    "studentPersonalData" : any,
    "studentSettings" : any,
	"studentContactsData" : any,
	"studentResultsData":any,
	"studentModulesData":any,
	"studentBursaryData":any,
    "isactive" : 0
}
