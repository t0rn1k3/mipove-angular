import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent {

  constructor(
    private formBuilder : FormBuilder
  ){}

  public contactForm = this.formBuilder.group({
    name : ['', Validators.required],
    surname : ['', Validators.required],
    email : ["", [Validators.required]],
    phone : ['', Validators.required]
  })

}
