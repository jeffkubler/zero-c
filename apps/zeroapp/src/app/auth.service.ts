import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { env } from "../environments/environment";
import { DEFAULT_USER, LoginReq, LoginResp, UserModel } from '@zeroc/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly endpoint = "auth/login";
  public get isLoggedIn() { return !!this.token }
  public token = "";
  public user: UserModel = DEFAULT_USER;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  async login(username: string, password: string) {
    const url = `${env.api}/${this.endpoint}`;
    const body: LoginReq = { username, password };

    try {
      const resp = await this.http.post<LoginResp>(url, body).toPromise();
      const { token, ...user } = resp;
      this.token = token;
      this.user = user;
      this.router.navigateByUrl("home");
      return true;
    } catch (e) {
      return false;
    }
  }

  logout() {
    this.token = "";
    this.router.navigateByUrl("/login");
  }
}
