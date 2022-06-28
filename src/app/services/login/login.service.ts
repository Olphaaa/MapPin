import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'https://api.mappin.sunei.fr/login';

  constructor(private httpClient: HttpClient) { }

  /**
   * Method to login
   *
   * @param username username
   * @param password password
   * @returns the user token
   */
  public login(username: string, password: string): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'login', {username, password});
  }



}
