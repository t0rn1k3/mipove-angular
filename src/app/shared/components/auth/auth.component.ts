import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private auth :  AuthService,
    private fb : FormBuilder
  ){}

  public loginForm = this.fb.group({
    email : ['', [Validators.required]],
    password : ['', [Validators.required ]],
  })


  ngOnInit(): void {
    
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const logForm = this.loginForm.value
    const user = {
      email : logForm.email!,
      password : logForm.password!
    }
    this.auth.login(user.email, user.password)
  }
  
}
