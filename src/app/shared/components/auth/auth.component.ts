import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private auth : AuthService,
    private router : Router
  ){}
  public loginForm = this.formBuilder.group({
    email : ["", [Validators.required]],
    password : ["", [Validators.required]]
  })


  submitted = false;


  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

    const logForm = this.loginForm.value;
    const user = {
      email : logForm.email!,
      password : logForm.password!
    }

    this.auth.loginUser(user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/special'])
        },
        err => console.log(err)
      )
  }
  
}
