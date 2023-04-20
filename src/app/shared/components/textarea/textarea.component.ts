import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {

  @Input() labelText : string | undefined;
  @Input() rows : string | undefined;
  @Input() cols : string | undefined;


}
