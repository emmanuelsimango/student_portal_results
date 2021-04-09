import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { Result } from 'src/app/models/result';
import { StudentPersonal } from 'src/app/models/student-personal';
import { ResultsService } from 'src/app/services/results.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { Period } from "src/app/models/period";

@Component({
	selector: "app-results",
	templateUrl: "results.component.html",

})
export class ResultsComponent implements OnInit {
	student: Student;
	studentResults: Result;
	resultOveral: Result;
	loading: Boolean = true;
	periods:Period[];
	selected_period:Period;
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
				// this.toast.error(result.message)
			}

			this.loaderService.is_loading.next(false)
			this.loading = false


		},(error=>{
			this.loaderService.is_loading.next(false)
			this.loading = false
		}));

		this.auth.getResultsPeriods().subscribe(periods=>{
			this.periods = periods;
			// if(periods.length>0){
				console.log(periods);

				this.getResults(periods[0].period_id)
			// }
		});
	}

	ngOnInit() {


	}



	getResults(period){
		console.log(period);

		this.loaderService.is_loading.next(true)
		this.result.getResults(period).subscribe(result => {
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
}
