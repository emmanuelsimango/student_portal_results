import { CartItem } from "./cart-item";

export interface PaynowRequest {
	return_url: String,
	surname: String
	first_name: String,
	reg_number: String,
	description: String,
	payment_code: number,
	email: String,
	cart: CartItem[],
}
