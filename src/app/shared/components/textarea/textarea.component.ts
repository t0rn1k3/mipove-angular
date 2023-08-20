import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {

  @Input() labelText : string | undefined;
  @Input() rows : string | undefined;
  @Input() control! : FormControl
  @Input() placeHolder : string = ''


}
