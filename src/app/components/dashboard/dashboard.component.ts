import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { DataService } from "../../shared/services/data.service"
import { Router } from "@angular/router";
import { User } from 'src/app/shared/services/user';
import { MatDialog } from '@angular/material/dialog';
import { ChangeNameComponent } from '../change-name/change-name.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

user = this.authService.userData;
userName: String = this.user.email;

  constructor(
    public authService: AuthService,
    private dataService: DataService,
    private dialog: MatDialog,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
    this.userName = this.userName.substring(0,this.userName.indexOf("@"));
  }

  openDialog(user: User){
      const dialogRef = this.dialog.open(ChangeNameComponent, {
        width: '500px',
        data: {email: user.email}
      });
  }

}
