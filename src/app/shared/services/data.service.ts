import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: String;
  shared = new Subject<String>();
  sharedOb = this.shared.asObservable();

  constructor() { }

   send(data: string){
    this.data = data;
    this.shared.next(data);
   }
   
}
