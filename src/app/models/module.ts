import { Post } from './Post';
import { ReadingMaterial } from './ReadingMaterial';
import { ExamPaper } from './ExamPaper';
import { Assignment } from './Assignment';
import { CourseWork } from './CourseWork';

export interface Module {
	"module_name": string,
	"module_id": number,
	"module_code": string,
	"module_unit_code": number,
	"period_id": number,
	"vle_status": boolean,
	"posts": Post[],
	"past_exam_papers": ExamPaper[],
	"reading_materials": ReadingMaterial[],
	"assignments":Assignment[],
	"course_work":CourseWork[]
}
