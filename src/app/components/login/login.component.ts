import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from "../../services/session.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  role:number;
  roleName: string;

  constructor(private _userService: UserService, private sessionService: SessionService, private _router: Router) { }
  ngOnInit() {

  }

  selectRole = (role, name) => {
    this.role = role;
    this.roleName = name;
  }

  goBack = () => {
    this.role = null;
  }

  login = () => {
    
  }
}
