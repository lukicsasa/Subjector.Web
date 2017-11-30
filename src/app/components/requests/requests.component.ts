import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { Popup } from 'ng2-opd-popup';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  users = [] as IUser[];
  user = {} as IUser;
  role: number;

  constructor(private userService: UserService, private alertService: AlertService, private popup: Popup) { }

  ngOnInit() {
    this.role = 3;
    this.getUsers();
  }

  getUsers = () => {
    this.userService.getUsersRequests(this.role).subscribe(r => {
      this.users = r;
    });
  }

  acceptRequest = (userId) => {
    this.userService.acceptRequest(userId).subscribe(r => {
      this.alertService.showSuccess("Email sent!");
      this.getUsers();
    });
  }

  deleteRequest = (userId) => {
    this.userService.deleteRequest(userId).subscribe(r => {
      this.alertService.showWarn("Deleted request!");
      this.getUsers();
    });
  }

  showPopup = () => {
    this.popup.show({
      header: "Add professor",
      widthProsentage: 50
    });
  }

  addProfessor = () => {
    this.userService.addProfessor(this.user).subscribe(r => {
      this.alertService.showSuccess("Email sent!");
      this.getUsers();
      this.popup.hide();      
    })
  }
}
