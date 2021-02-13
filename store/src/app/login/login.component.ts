import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { LoginDialogComponent } from "./login-dialog/login-dialog.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialog = this.dialog.open(LoginDialogComponent);
  }


}
