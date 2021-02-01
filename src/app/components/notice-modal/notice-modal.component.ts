import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Notice } from 'src/app/models/notice';

@Component({
	selector: 'app-notice-modal',
	templateUrl: './notice-modal.component.html',
	styleUrls: ['./notice-modal.component.scss']
})
export class NoticeModalComponent implements OnInit,OnChanges {
	notice:Notice;
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
