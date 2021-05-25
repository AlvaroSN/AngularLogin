import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: any;
  userName: String;
  data: String;
  shared: any;
  sharedOb: any;

  constructor(private authService: AuthService) {
    this.shared = new Subject<String>();
    this.sharedOb = this.shared.asObservable();
   }

  update (){
    this.user = this.authService.userData;
    this.userName = this.user.email;
    this.data = this.userName.substring(0,this.userName.indexOf("@"));
  }

  send(data: string){
    this.data = data;
    this.shared.next(data);
  }
   
}
