import { Component, OnInit, Input } from '@angular/core';
import { Notice } from 'src/app/models/notice';

@Component({
	selector: 'app-dashNoticeModal',
	templateUrl: './dashNoticeModal.component.html',
	styleUrls: ['./dashNoticeModal.component.scss']
})
export class DashNoticeModalComponent implements OnInit {
	@Input('id') id:number;
	@Input('notice') notice:Notice
	constructor() { }

	ngOnInit() {
		console.log(this.id);

	}

}
