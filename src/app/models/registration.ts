import { Module } from './module';
import { Student_period } from './student_period';

export interface Registration {
	"period": Student_period,
	"program": any,
	"modules": Module[]
}
