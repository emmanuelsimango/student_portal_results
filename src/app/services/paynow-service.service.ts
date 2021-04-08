import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CartItem } from "../models/cart-item";
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

	public makePayment(email, amount) {
		const student: Student = this.auth.is_Authenticated();
		if (student) {
			let cartItems: CartItem[] = [
				{ description: "Fees Payment", amount: amount },
			];
			const data: PaynowRequest = {
				return_url: `${this.serverDetails.portalURL}/self/#/bursary/`,
				surname: student.profile.surname,
				first_name: student.profile.first_name,
				reg_number: this.auth.getAuth().reg_number,
				description: `Payment for ${student.profile.first_name} ${
					student.profile.surname
				} (${this.auth.getAuth().reg_number})`,
				payment_code: 100,
				email: email,
				cart: cartItems,
			};

			return this._http.post<PaynowTransaction>(`${this.paynowServiceUrl}/res`,data,this.httpOptions);
		}
	}
}
