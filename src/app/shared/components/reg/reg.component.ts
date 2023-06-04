import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  public registerForm = this.fb.group({
    name : ['', [Validators.required]],
    email : ['', [Validators.required]],
    password : ['', [Validators.required]],
  })

  constructor(
    private auth : AuthService,
    private fb : FormBuilder
  ){}


  onSubmit(){
    if (this.registerForm.invalid) {
      return;
    }

    const regForm = this.registerForm.value
    const user = {
      name :  regForm.name!,
      email : regForm.email!,
      password : regForm.password!,
    }

    this.auth.registration(user.name, user.email, user.password)


    console.log('hello')
  }

  ngOnInit(): void {
    
  }

}
