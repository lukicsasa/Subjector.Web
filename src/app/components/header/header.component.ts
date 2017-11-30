import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser;
  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.sessionService.user;
  }

  logout() {
    this.sessionService.logout();
    this.router.navigateByUrl('/login');
  }

}
