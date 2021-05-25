import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { DataService } from "../../shared/services/data.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public dataService: DataService
  ) { }

  ngOnInit() { }

}