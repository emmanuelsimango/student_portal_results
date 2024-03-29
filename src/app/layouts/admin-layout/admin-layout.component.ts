import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: string = "blue";

  constructor() {

  }
  changeSidebarColor(color){
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }
  changeDashboardColor(color){
	var body = document.getElementsByTagName('body')[0];
	localStorage.setItem('bg',color);
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {
    this.changeSidebarColor('blue');
	// this.changeSidebarColor('primary')
	try {
		const bg = localStorage.getItem('bg');
		if (bg) {
			this.changeDashboardColor(bg);
		}else{
			this.changeDashboardColor('white-content')

		}
	} catch (error) {
		console.log(error);

	}
  }
}
