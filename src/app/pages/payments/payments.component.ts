import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { LoaderService } from "src/app/services/loader.service";
import { ResetPinService } from "src/app/services/reset-pin.service";
import { ReactiveFormsModule } from "@angular/forms";
import { PaynowTransaction } from "src/app/models/paynow-transaction";
import { PaynowServiceService } from "src/app/services/paynow-service.service";
import { PaymentCode } from "src/app/models/payment-code";
import { Payment } from "src/app/models/payment";
@Component({
	selector: "app-payments",
	templateUrl: "./payments.component.html",
	styleUrls: ["./payments.component.scss"],
})
export class PaymentsComponent implements OnInit {


	msg: string;
	payments: PaynowTransaction[];
	payment_codes: PaymentCode[] = [
		{ description: "TUTION FEES", payment_code: 100 },
		{ description: "ACCOMODATION", payment_code: 103 },
		{ description: "GRADUATION FEES", payment_code: 107 },
		{description:"EXAM FEES",payment_code:104},
		{description:"FINES PENALTIES",payment_code:106},
	];
	model: FormGroup = new FormGroup({
		amount: new FormControl(0.0),
		email: new FormControl("example@gmail.com"),
		description: new FormControl(this.payment_codes)
	});
	constructor(
		private pinService: ResetPinService,
		private toast: ToastrService,
		private loader: LoaderService,
		private modalService: NgbModal,
		private router: Router,
		private paynowService: PaynowServiceService
	) {
		this.paynowService.getTransactions().subscribe((transactions) => {
			this.payments = transactions;
			console.log(transactions);
		});
	}

	ngOnInit(): void {

	}

	onSubmit(formData: NgForm, modal) {
		const data = formData.value;
		// console.log(formData.value);

		const payment:Payment = {amount:data.amount,email:data.email, description:this.payment_codes.filter(e=>{return e.payment_code==data.description})[0]};

		console.log(data)


		this.loader.is_loading.next(true);
		this.paynowService.makePayment(payment).subscribe(transaction=>{
			this.msg = "We're redirecting you to paynow website to finish your payment";
			this.open(modal,transaction.browserurl);

		});
	}
	submit(pin, cpin, password) {
		// alert("hie");
		console.log(pin);

		if (pin) {
			if (pin === cpin) {
				this.loader.is_loading.next(true);
				this.pinService.resetPin(pin, password).subscribe(
					(result) => {
						console.log(result);

						if (!result.error) {
						}
						this.loader.is_loading.next(false);
					},
					(error) => {
						this.loader.is_loading.next(false);
						console.log(error);
					}
				);
			} else {
				this.toast.error("Pins do not match");
			}
		} else {
			alert("Pin is required");
			this.toast.error("Pins do not match");
		}
	}
	open(content, url) {
		this.modalService
			.open(content, { keyboard: true, size: "sm" })
			.result.then(
				(result) => {

				},
				(reason) => {}
			);
	}
}
