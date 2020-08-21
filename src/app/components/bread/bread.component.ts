import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ROUTES } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.scss']
})
export class BreadComponent implements OnInit {
	location: Location;
	private listTitles: any[];

  constructor(
	location: Location
  ) {
	this.location = location

  }

  ngOnInit() {
	this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
	var titlee = this.location.prepareExternalUrl(this.location.path());
	if (titlee.charAt(0) === "#") {
		titlee = titlee.slice(1);
	}

	for (var item = 0; item < this.listTitles.length; item++) {
		if (this.listTitles[item].path === titlee) {
			return this.listTitles[item].title;
		}
	}
	return "Dashboard";
}


}
