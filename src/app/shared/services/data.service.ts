import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../services/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private authService: AuthService) { }

  user = this.authService.userData;
  userName: String = this.user.email;
  
  data: String = this.userName.substring(0,this.userName.indexOf("@"));
  shared = new Subject<String>();
  sharedOb = this.shared.asObservable();

   send(data: string){
    this.data = data;
    this.shared.next(data);
   }
   
}
