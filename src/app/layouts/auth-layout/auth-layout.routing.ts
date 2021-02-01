import { Routes } from '@angular/router';


import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { ErrorComponent } from 'src/app/pages/auth/error/error.component';
import { StudentDataComponent } from 'src/app/pages/auth/error/student-data/student-data.component';


export const AuthLayoutRoutes: Routes = [
	{ path: 'auth/:reg/:token', component: AuthComponent },
	{ path: 'error', component: ErrorComponent },
	{ path: 'error/not_registered', component: StudentDataComponent },

];
