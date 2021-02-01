import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Student } from 'src/app/models/student';
import { Module } from 'src/app/models/module';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ReadingMaterial } from 'src/app/models/ReadingMaterial';
import { ServerDetails } from 'src/app/services/serverDetails';
import { ExamPaper } from 'src/app/models/ExamPaper';
import { Assignment } from 'src/app/models/Assignment';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyAuth } from 'src/app/models/auth';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { ModuleService } from 'src/app/services/moduleService.service';
import { CourseWork } from 'src/app/models/CourseWork';


declare const google: any;


@Component({
	selector: "app-map",
	templateUrl: "modules.component.html",
	styleUrls: ["modules.component.scss"]
})
export class ModulesComponent implements OnInit {
	serverDetails: ServerDetails = new ServerDetails();
	student: Student;
	modules: Module[];
	closeResult: string;
	selectedModule: Module;
	selectedCoursework:CourseWork[]
	pageM = 1;
	pageP = 1;
	pageA = 1;
	pageSize = 5;
	fileToUpload:any
	constructor(
		public auth: AuthService,
		private modalService: NgbModal,
		private http:HttpClient,
		private loader:LoaderService,
		private toastr: ToastrService,
		private myModules:ModuleService
	) {

		this.student = this.auth.is_Authenticated();
		this.modules = this.student.registration.modules;
		this.myModules.updateModules().subscribe(modules=>{
			this.modules = modules
		});
		console.log(this.modules);

	}

	ngOnInit() {

	}

	uploadFile(file,assigment:Assignment) {
		this.loader.is_loading.next(true);
		this.fileToUpload = file.files[0];
		let formData = new FormData();
		formData.append('file', this.fileToUpload, this.fileToUpload.name);
		formData.append('module_id',assigment.module_id.toString());
		formData.append('assignment_id', assigment.assignment_id.toString());

		const myAuth:MyAuth = JSON.parse(localStorage.getItem('auth'));
		let headers:HttpHeaders = new HttpHeaders();
		// headers.append('Content-Type','multipart/form-data');
		// headers.append('accept', 'application/json');

        console.log(`${this.serverDetails.portalURL}/index.php/cut_elearning/api/uploadAssignment/${myAuth.reg_number}/${myAuth.token}`);

		this.http.post<any>(`${this.serverDetails.portalURL}/index.php/cut_elearning/api/uploadAssignment/${myAuth.reg_number}/${myAuth.token}`, formData,{headers:headers}).subscribe(val => {

			if (!val.body.error) {
				assigment.uploaded = true;
				this.toastr.success('Assignment Uploaded Successfully', 'Upload Done!');
				this.auth.updateStudent(this.student);

			}
			this.loader.is_loading.next(false);
		});
		return false;
	}

	open(content, module: Module) {
		this.selectedModule = module;
		this.selectedCoursework = module.course_work
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


	getFileURL(material: ReadingMaterial) {
		return `${this.serverDetails.portalURL}\\${material.path}\\${material.upload_name}`;
	}
	getReadingMaterialTotal(): number {
		let total = 0;
		this.modules.forEach(st => {
			total += st.reading_materials.length;
		})

		return total
	}
	getReadingAssignmentsTotal(): number {
		let total = 0;
		this.modules.forEach(st => {
			total += st.assignments.length;
		})

		return total
	}
	getReadingPapersTotal(): number {
		let total = 0;
		this.modules.forEach(st => {
			total += st.past_exam_papers.length;
		})

		return total
	}
	getPostTotal(): number {
		let total = 0;
		this.modules.forEach(st => {
			total += st.posts.length;
		})

		return total
	}
}
