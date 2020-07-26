import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth-service.service';


@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private auth: AuthService, public router: Router) { }
	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
		if (!this.auth.is_Authenticated()) {
			console.log(state.url);
			this.router.navigate(['login'],{ queryParams: { returnUrl: state.url }});
			return false;
		}
		return true;
	}
}
