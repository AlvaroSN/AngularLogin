import { Component, OnInit } from '@angular/core';
import { DataService } from "../../shared/services/data.service"
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common'; 
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {

  constructor(private dataService: DataService,
    public dialogRef: MatDialogRef<ChangeNameComponent>,
    @Inject(DOCUMENT) public document,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  name: String;
  originalName = this.data.name;

  ngOnInit(): void {
    this.dataService.sharedOb.subscribe(sharedName => {
      this.name = sharedName
    })
  }

  submit(name: string){
    this.dataService.send(name);
    this.dialogRef.close();
  }

}
