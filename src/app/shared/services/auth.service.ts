import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login'

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }


  registerUser(user : any){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user : any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logOutUser() {
    localStorage.removeItem('token')
    this.router.navigate([' '])
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

}