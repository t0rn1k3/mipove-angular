import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { EmailValidator } from '../../validators/email.validator';


@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private emailService : EmailService
  ){}

  public contactForm = this.formBuilder.group({
    name : ['', Validators.required],
    surname : ['', Validators.required],
    email : ["", [Validators.required, EmailValidator.validateEmail]],
    phone : ['', Validators.required],
    textarea : ['', Validators.required]
  })


  ngOnInit(): void {
    
  }


  onSubmit(formData : any){
    this.emailService.SendEmail(formData)
      .subscribe( res => {
        location.href = 'https://mailthis.to/confirm'
      }, err => {
        console.warn(err.responseText)
        console.log({err})
      }
      )
  }

}
