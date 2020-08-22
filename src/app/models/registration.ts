import { Module } from './module';
import { Program } from './program';
import { Student_period } from './student_period';

export interface Registration {
	"period": Student_period,
	"program":Program,
	"modules": Module[]
}
