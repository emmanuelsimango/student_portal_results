import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ServerDetails } from "./serverDetails";

@Injectable({
	providedIn: "root",
})
export class PaynowServiceService {
	service_url:string = new ServerDetails().paynowUrl
	constructor(
		private _http:HttpClient
	) {
		
	}
}
