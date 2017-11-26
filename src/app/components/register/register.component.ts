import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { SessionService } from "../../services/session.service";
import { Router } from "@angular/router";
import { IUser } from "../../interfaces/IUser";
import { AlertService } from "../../services/alert.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {} as IUser;

  constructor(private _userService: UserService, private _alertService: AlertService, private _router: Router) { }
  ngOnInit() {

  }

  register = () => {
    this._userService.register(this.user).subscribe(response => {
      this._alertService.showSuccess("Request has been successfully sent!");

      setTimeout(() => {
        this._router.navigate(['./login']);
      }, 3000);
    });
  }
}
