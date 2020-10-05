import { Student_period } from './student_period';

export interface RegistrationTemplate {

		"valid": boolean,
		"message": String,
		"body": {
			"open": boolean,
			"fees": number,
			"module": [ {"module_code": string,
			"module_unit_code": number,
			"module_id": number,
			"module_name": string}],
			"nextPeriod": Student_period,
			"nextLevel": {
				"semester": number,
				"academic_level": number
			}
		}

}
