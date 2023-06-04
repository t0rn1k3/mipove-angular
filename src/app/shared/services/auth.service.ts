import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebase : AngularFireAuth,
    private router : Router
  ) { }

  public login(
    email : string,
    password : string
  ) {
    this.firebase.signInWithEmailAndPassword(email, password).then(()=> {
      localStorage.setItem('token', 'true')
      this.router.navigate(['/'])
    }, err => {
      console.log(err.message)
      this.router.navigate(['/authorization'])
    }
    )
  }


  public registration(
    name : string,
    email : string,
    password : string
  ){
    this.firebase.createUserWithEmailAndPassword(email, password).then(()=> {
      alert('succes')
      this.router.navigate(['/authorization'])
    }, err => {
      console.log(err.message)
      this.router.navigate(['/registration'])
    }
    )
  }


  public logout() {
    this.firebase.signOut().then( ()=> {
      localStorage.removeItem('token')
      this.router.navigate(['/authorization'])
    }, err => {
      console.log(err.message)
    }
    )
  }
}
