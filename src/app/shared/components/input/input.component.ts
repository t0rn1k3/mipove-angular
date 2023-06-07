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
  @Input() control! : FormControl

  onChange(){
    this.isDirty = true;
  }

  
}
