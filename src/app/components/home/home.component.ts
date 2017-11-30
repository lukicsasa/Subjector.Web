import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { IUser } from "../../interfaces/IUser";
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  currentUser = {} as IUser;
  constructor(private _userService: UserService, private sessionService: SessionService) { }
  ngOnInit() {
    this.currentUser = this.sessionService.user;
  }

  hanldeUpdateClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

  }
}
