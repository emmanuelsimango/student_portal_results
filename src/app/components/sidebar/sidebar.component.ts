import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
}
export const ROUTES: RouteInfo[] = [
	{
		path: "/dashboard",
		title: "Dashboard",
		icon: "icon-chart-pie-36",
		class: ""
	},
	{
		path: "/modules",
		title: "Modules",
		icon: "icon-bullet-list-67",
		class: ""
	},
	{
		path: "/bursary",
		title: "Bursary",
		icon: "icon-money-coins",
		class: ""
	},
	/*
{
  path: "/notifications",
  title: "Notifications",
  icon: "icon-bell-55",
  class: ""
},*/

	//   {
	//     path: "/user",
	//     title: "My Profile",
	//     icon: "icon-single-02",
	//     class: ""
	//   },
	{
		path: "/results",
		title: "Results",
		icon: "icon-chart-bar-32",
		class: ""
	},
];

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
	menuItems: any[];

	constructor() { }

	ngOnInit() {
		this.menuItems = ROUTES.filter(menuItem => menuItem);
	}
	isMobileMenu() {
		if (window.innerWidth > 991) {
			return false;
		}
		return true;
	}
}
