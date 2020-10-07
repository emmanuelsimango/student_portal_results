import { RegistrationModule } from './RegistrationModule';
import { Student_period } from './student_period';

export interface RegistrationTemplate {

	"valid": boolean,
	"message": String,
	"body": {
		"open": boolean,
		"fees": number,
		"module": any,
		"nextPeriod": Student_period,
		"nextLevel": {
			"semester": number,
			"academic_level": number
		}
	}

}
