import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from "../../services/session.service";
import { UserService } from "../../services/user.service";
import { IUser } from "../../interfaces/IUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  role:number;
  roleName: string;
  user = {} as IUser;

  constructor(private _userService: UserService, private sessionService: SessionService, private _router: Router) { }
  ngOnInit() {
    if(this.sessionService.is_logged_in) {
      this._router.navigate(['./home']);
    }
  }

  selectRole = (role, name) => {
    this.role = role;
    this.roleName = name;
  }

  goBack = () => {
    this.role = null;
  }

  login = () => {
    this._userService.login(this.user).subscribe(r => {
      this._router.navigate(['./home']);
    });
  }

  register = () => {
    this._router.navigate(['./register']);
  }
}
