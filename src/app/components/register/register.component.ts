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

  constructor(private _userService: UserService, private _alertService: AlertService, private _router: Router) { }
  ngOnInit() {
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

   
  }
}
