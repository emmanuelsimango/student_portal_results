import { Injectable } from '@angular/core';
import { ServerDetails } from './serverDetails';
import { NoticeCategory } from '../models/notice_category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class NoticeService {
	serverDetail:ServerDetails = new ServerDetails();
	constructor(
		private _http:HttpClient
	) { }

	public getByCategory():Observable<NoticeCategory[]>{
		return this._http.get<NoticeCategory[]>(`${this.serverDetail.noticeAPI}/notice/byCategory`);
	}
}
