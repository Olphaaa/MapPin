import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'https://api.mappin.sunei.fr/auth';

  constructor(private httpClient: HttpClient) { }

  /**
   * Method to login
   *
   * @param user user to login
   * @returns the user token
   */
  public login(user: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/login', user);
  }

  /**
   * Method to signup
   *
   * @param user user to signup
   * @returns the user token
   */
  public signUp(user: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/register', user);
  }


}
