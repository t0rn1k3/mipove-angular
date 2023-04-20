import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  
  @Input() type : string = '';
  @Input() labelText : string | undefined;
  @Input() isDirty = false;

  onChange(){
    this.isDirty = true;
  }

  
}
