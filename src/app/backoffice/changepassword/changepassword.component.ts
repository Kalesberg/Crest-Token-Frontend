import { Component } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  CurrentPwd: String;
  NewPwd: String;
  CNewPwd: String;

  changepassword() {
  }
}
