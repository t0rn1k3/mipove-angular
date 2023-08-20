import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  
  @Input() type : string = '';
  @Input() labelText : string | undefined;
  @Input() isDirty = false;
  @Input() placeHolder : string = ''
  @Input() appText : string = ''
  @Input() control! : FormControl

  onChange(){
    this.isDirty = true;
  }


  getErrorMessage(): string {
    console.log(this.control.hasError('invalidEmailFormat'))
    if (this.control.hasError('required')) {
      return 'ამ ველის შევსება სავალდებულოა';
    }
    if (this.control.hasError('invalidEmailFormat')) {
      return 'მეილის ფორმატი არასწორია';
    }
    if (this.control.hasError('invalidPasswordFormat')) {
      return 'მინიმუმ 8 ასო, 1 სიმბოლო, 1 ციფრი, დიდი და პატარა ასოები';
    }
    if (this.control.hasError('invalidPhoneFormat')) {
      return 'Invalid phone number format';
    }
    if (
      this.control.hasError('minlength') ||
      this.control.hasError('maxlength')
    ) {
      return 'მინ 4 სიმბოლო';
    }
    return '';
  }
  
}
