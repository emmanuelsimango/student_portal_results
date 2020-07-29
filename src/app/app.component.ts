import { Component } from "@angular/core";
import { LoaderService } from './services/loader.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "online-results";
  is_loading:boolean
  constructor(private loader:LoaderService){
	this.loader.is_loading.subscribe(status=>{
		this.is_loading = status
	})
  }
}
