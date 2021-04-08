import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/services/loader.service';
import { ResetPinService } from 'src/app/services/reset-pin.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

	model: Payment = {
		amount: 0.0,
		email: null,
	};
	error_msg: string

  constructor(
	private pinService: ResetPinService,
	private toast: ToastrService,
	private loader: LoaderService,
	private modalService: NgbModal,
	private router:Router
  ) {

   }

  ngOnInit(): void {
  }

	onSubmit(formData: NgForm, modal) {
		const resetData = formData.value
		if (resetData.pin != resetData.confirm_pin) {
			this.error_msg = "The pin codes you have provided do not match!!!, Please try again"
			this.open(modal);
			return
		}
		this.loader.is_loading.next(true);
		this.pinService.resetPin(resetData.pin, resetData.password).subscribe(result => {
			console.log(result);

			if (!result?.body?.error) {
				this.toast.success('Pin updated successfully')
				this.router.navigate(['dashboard'])
			} else {
				this.error_msg = result.body.message
				this.open(modal);
				formData.reset()
			}
			this.loader.is_loading.next(false);
		},(error=>{
			console.log(error)
			this.loader.is_loading.next(false);
		}))

	}
	submit(pin, cpin, password) {
		// alert("hie");
		console.log(pin);

		if (pin) {
			if (pin === cpin) {
				this.loader.is_loading.next(true)
				this.pinService.resetPin(pin, password).subscribe(result => {
					console.log(result);

					if (!result.error) {

					}
					this.loader.is_loading.next(false);
				}, (error => {
					this.loader.is_loading.next(false);
					console.log(error);

				}));
			} else {
				this.toast.error("Pins do not match")
			}
		} else {
			alert("Pin is required")
			this.toast.error("Pins do not match")
		}
	}
	open(content) {

		this.modalService.open(content, { keyboard: true, size: 'sm' }).result.then((result) => {

		}, (reason) => {

		});
	}

}

interface Payment {
	amount: number,
	email: string,
}
