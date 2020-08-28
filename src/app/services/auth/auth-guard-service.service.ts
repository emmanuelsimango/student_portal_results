import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth-service.service';
import { ServerDetails } from '../serverDetails';


@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
	returnUrl: string;
	serverDetail:ServerDetails = new ServerDetails();
	constructor(private auth: AuthService, public router: Router,	private route: ActivatedRoute) { }
	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
		if (!this.auth.is_Authenticated()) {
			console.log(state.url);
			// this.router.navigate(['login'],{ queryParams: { returnUrl: state.url }});
			window.location.href = this.serverDetail.logoutURL;
			localStorage.clear();
			return false;
		}

		// get return url from route parameters or default to '/
		return true;
	}
}
