/*
 =========================================================
 * Black Dashboard Angular - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
  if(window){
	window.console.log = window.console.warn = window.console.info = function(){
		// Don't log anything.
	  };
  };
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
