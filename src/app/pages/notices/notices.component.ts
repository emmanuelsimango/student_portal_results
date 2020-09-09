import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { NoticeCategory } from 'src/app/models/notice_category';
import { MyNotice } from 'src/app/models/mynotice';
import { ServerDetails } from 'src/app/services/serverDetails';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-notices',
	templateUrl: './notices.component.html',
	styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {
	noticeCategories: NoticeCategory[];
	notices: MyNotice[];
	selectedCategory: NoticeCategory;
	selectedNotice:MyNotice
	closeResult: string;
	serverDetails:ServerDetails = new ServerDetails();
	constructor(private noticeService: NoticeService,	private modalService: NgbModal,) {
		this.noticeService.getByCategory().subscribe(categories => {
			this.noticeCategories = categories
			console.log(categories);
		})
	}

	ngOnInit(): void {
	}

	changeNotices(category: NoticeCategory) {
		this.selectedCategory = category;
		this.notices = category ? category.notices : null
	}

	open(content, notice: MyNotice) {
		this.selectedNotice = notice
		this.modalService.open(content, { keyboard: true, size: 'lg' }).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}


}


