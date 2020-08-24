import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { Module } from 'src/app/models/module';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ReadingMaterial } from 'src/app/models/ReadingMaterial';
import { ServerDetails } from 'src/app/services/serverDetails';
import { ExamPaper } from 'src/app/models/ExamPaper';
import { Assignment } from 'src/app/models/Assignment';

declare const google: any;


@Component({
	selector: "app-map",
	templateUrl: "modules.component.html",
	styleUrls: ["modules.component.scss"]
})
export class ModulesComponent implements OnInit {
	serverDetails:ServerDetails = new ServerDetails();
	student: Student;
	modules:Module[];
	closeResult: string;
	selectedModule:Module;
	pageM=1;
	pageP=1;
	pageA=1;
	pageSize=5;
	constructor(
		private auth: AuthService,
		private modalService: NgbModal
	) {
		this.student = this.auth.is_Authenticated();
		this.modules = this.student.registration.modules;
		console.log(this.modules);

	}

	ngOnInit() {

	}
	open(content,module:Module) {
		this.selectedModule = module;

		this.modalService.open(content, {keyboard:true, size:'lg'}).result.then((result) => {
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
		  return  `with: ${reason}`;
		}
	  }

	getFileURL(material:ReadingMaterial){
		return `${this.serverDetails.portalURL}\\${material.path}\\${material.upload_name}`;
	}
	getReadingMaterialTotal():number{
		let total = 0;
		this.modules.forEach(st=>{
			total +=st.reading_materials.length;
		})

		return total
	}
	getReadingAssignmentsTotal():number{
		let total = 0;
		this.modules.forEach(st=>{
			total +=st.assignments.length;
		})

		return total
	}
	getReadingPapersTotal():number{
		let total = 0;
		this.modules.forEach(st=>{
			total +=st.past_exam_papers.length;
		})

		return total
	}
	getPostTotal():number{
		let total = 0;
		this.modules.forEach(st=>{
			total +=st.posts.length;
		})

		return total
	}
}
