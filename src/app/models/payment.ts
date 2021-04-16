import { PaymentCode } from "./payment-code";

export interface Payment {
	amount: number;
	email: string;
	description: PaymentCode
}
