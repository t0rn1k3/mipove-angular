import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EmailValidator } from '../../validators/email.validator';
import { PasswordValidator } from '../../validators/password.validator';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  constructor(
    private formBuilder : FormBuilder,
    private auth : AuthService,
    private router : Router
  ){}


  public registerForm = this.formBuilder.group({
    name : ['', Validators.required],
    email: ['', [Validators.required, EmailValidator.validateEmail]],
    password: ['', [Validators.required, PasswordValidator.validatePassword]],
  })


  submitted = false

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submitted = true
    if (this.registerForm.invalid) {
      return;
    }
    const regForm = this.registerForm.value
    const user = {
      name : regForm.name,
      email :  regForm.email,
      password : regForm.password
    }

    this.auth.registerUser(user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate([''])
        },
        err => console.log(err) 
      )
  }

}
