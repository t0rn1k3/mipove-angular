import { Component, HostBinding } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-applications-container',
  templateUrl: './applications-container.component.html',
  styleUrls: ['./applications-container.component.scss']
})
export class ApplicationsContainerComponent {

  

  constructor(
    private  formBuilder : FormBuilder
  ){}
  public contactForm = this.formBuilder.group({
    name : ['', Validators.required],
    price : ['', Validators.required],
    textarea : ['', Validators.required]
  })


  @HostBinding('class.open') isOpen = false


  onModalOpen () {
    this.isOpen = !this.isOpen
  }
}
