import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { Result } from 'src/app/models/result';
import { StudentPersonal } from 'src/app/models/student-personal';
import { ResultsService } from 'src/app/services/results.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: "app-results",
	templateUrl: "results.component.html",

})
export class ResultsComponent implements OnInit {
	student: Student;
	studentResults: Result;
	resultOveral: Result;
	loading: Boolean = true
	constructor(
		private auth: AuthService,
		private result: ResultsService,
		public loaderService: LoaderService,
		private toast: ToastrService

	) {
		this.loaderService.is_loading.next(true)
		this.result.getResults(null).subscribe(result => {
			console.log(result);

			if (!result.error) {
				this.studentResults = result
			} else {
				this.toast.error(result.message)
			}

			this.loaderService.is_loading.next(false)
			this.loading = false


		},(error=>{
			this.loaderService.is_loading.next(false)
			this.loading = false
		}));

	}

	ngOnInit() {


	}
}
