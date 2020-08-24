import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Notice } from 'src/app/models/notice';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
	selector: 'app-dashNoticeModal',
	templateUrl: './dashNoticeModal.component.html',
	styleUrls: ['./dashNoticeModal.component.scss']
})
export class DashNoticeModalComponent implements OnInit {
	@Input('id') id:number;
	@Input('notice') notice:Notice

	constructor(config: NgbModalConfig, private modalService: NgbModal,private auth:AuthService) {
		config.backdrop = 'static';
		config.keyboard = false;
		auth.has_Message.subscribe(notice=>{
			if (notice) {
				this.notice = notice
				const ntic = document.getElementById('noticeLauncher');
				if (ntic) {
					ntic.click();
				}
				console.log('clicked');
			}

		});
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes.is_open);


	}

	ngOnInit(): void {

	}
	open(content) {
		this.modalService.open(content);
	}
}
