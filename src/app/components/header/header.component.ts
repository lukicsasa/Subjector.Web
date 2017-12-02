import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session.service";
import { Router } from "@angular/router";
import { Popup } from 'ng2-opd-popup';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser;
  password = {};
  constructor(private sessionService: SessionService, private alertService: AlertService, private userService: UserService, private router: Router, private popup: Popup) { }

  ngOnInit() {
    this.currentUser = this.sessionService.user;
  }

  logout() {
    this.sessionService.logout();
    this.router.navigateByUrl('/login');
  }

  openChangePassword() {
    this.popup.show({
      header: "Change Password",
      widthProsentage: 50
    });
  }

  changePassword() {
    this.userService.changePassword(this.password).subscribe(r => {
      this.alertService.showSuccess("Password changed!");
      this.popup.hide();
    });
  }
}
