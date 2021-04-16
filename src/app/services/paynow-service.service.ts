import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartItem } from "../models/cart-item";
import { Payment } from "../models/payment";
import { PaynowRequest } from "../models/paynow-request";
import { PaynowTransaction } from "../models/paynow-transaction";
import { Student } from "../models/student";
import { AuthService } from "./auth/auth-service.service";
import { ServerDetails } from "./serverDetails";

@Injectable({
	providedIn: "root",
})
export class PaynowServiceService {
	serverDetails = new ServerDetails();
	paynowServiceUrl: string = this.serverDetails.paynowUrl;
	httpOptions = {
		headers: new HttpHeaders({
			"Content-Type": "application/json",
			//   Authorization: 'my-auth-token'
			Accept: "application/json",
		}),
	};
	constructor(private _http: HttpClient, private auth: AuthService) {}

	public makePayment(payment:Payment) {
		const student: Student = this.auth.is_Authenticated();
		if (student) {
			let cartItems: CartItem[] = [
				{ description: payment.description.description, price: payment.amount },
			];
			const data: PaynowRequest = {
				return_url: `${this.serverDetails.portalURL}/self/#/bursary/`,
				surname: student.profile.surname,
				first_name: student.profile.first_name,
				reg_number: this.auth.getAuth().reg_number,
				description: `${payment.description.description}`,
				payment_code: payment.description.payment_code,
				email: payment.email,
				cart: cartItems,
			};

			return this._http.post<PaynowTransaction>(`${this.paynowServiceUrl}paynow`,data,this.httpOptions);
		}
	}

	/**
	 * getTransactions
	 */
	public getTransactions(): Observable<PaynowTransaction[]>{
		const data = {
			reg_number:this.auth.getAuth().reg_number
		};
		return this._http.post<PaynowTransaction[]>(`${this.paynowServiceUrl}paynow/student`,data,this.httpOptions);
	}
	public pollTransaction(transaction_id): Observable<PaynowTransaction[]>{
		const data = {
			id:transaction_id
		};
		return this._http.post<PaynowTransaction[]>(`${this.paynowServiceUrl}paynow/poll`,data,this.httpOptions);
	}
}
