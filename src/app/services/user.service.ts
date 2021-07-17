import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/user";

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private _http: HttpClient) {}

  public create(user: User): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this._http.post<any>('https://tekdi-challenges.appspot.com/api/People', user, {headers: headers});
  }

  public getAll(): Observable<any> {
    return this._http.get<any>('https://tekdi-challenges.appspot.com/api/People');
  }

}
