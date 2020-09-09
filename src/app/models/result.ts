import { ResultModule } from './result_module';

export interface Result {
	"modules": ResultModule[],
	"periodname": string,
	"humandecision": string,
	"gpa": string,
	"TheDegreeClass": string,
	"suppressionmsg":string,
	error:boolean
}
