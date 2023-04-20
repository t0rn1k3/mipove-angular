import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  
  @Input() type = '';
  @Input() placeHolder! : string ;
  @Input() icon! :  string ;
  @Input() labelText : string = '';
  @Input() isDirty = false;

  onChange(){
    this.isDirty = true;
  }

  
}
