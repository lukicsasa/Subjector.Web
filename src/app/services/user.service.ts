import { Injectable } from '@angular/core';
import { RequestService } from "./request.service";
import { IUser } from "../interfaces/IUser";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { SessionService } from "./session.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {


  constructor(private requestService: RequestService, private sessionService: SessionService, private cookieService: CookieService) { }

  login = (user: IUser) => {
    return this.requestService.post('user/login', user)
      .flatMap((response: {  user: IUser, token: string }) => {
        this.sessionService.initSession(response.token, response.user);
        return Observable.create(observer => {
          observer.next(response);
          observer.complete();
        });
      });
  };

  register = (user: IUser) => {
    return this.requestService.post('user/register', { ...user });
  }

  getUsersRequests = (role: number): Observable<IUser[]> => {
    return this.requestService.get('user/getUsersRequests?role=' + role)
      .map((response) => {
        return response;
      });
    // .flatMap((response: IUser[]) => {
    //   return Observable.create(observer => {
    //     observer.next(response);
    //     observer.complete();
    //   });
    // });
  }

  acceptRequest = (userId: number) => {
    return this.requestService.post('user/acceptRequest?userId=' + userId);
  }

  deleteRequest = (userId: number) => {
    return this.requestService.post('user/deleteRequest?userId=' + userId);
  }

 

  get(): Observable<IUser> {
    return this.requestService.get('user')
      .flatMap((response: IUser) => {
        return Observable.create(observer => {
          observer.next(response);
          observer.complete();
        });
      });
  }

  update(user: IUser): Observable<IUser> {
    return this.requestService.put('user', user)
      .flatMap((response: IUser) => {
        return Observable.create(observer => {
          observer.next(response);
          observer.complete();
        });
      });
  }
}
