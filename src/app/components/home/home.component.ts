import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { IUser } from "../../interfaces/IUser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = {} as IUser;
  constructor(private _userService: UserService) { }
  ngOnInit() {
    
  }

  hanldeUpdateClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

  }
}
