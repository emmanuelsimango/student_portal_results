import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
	is_loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}
