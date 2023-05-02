import { Component, Input, Output, OnInit, EventEmitter  } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input() submitLabel! : string
  @Input() hasCancelButton : boolean = false
  @Input() initialText : string = ''

  @Output() handleSubmit = new EventEmitter<string>();


  form! : FormGroup

  constructor(
    private fb : FormBuilder
  ){}

  onSubmit() {
    this.handleSubmit.emit(this.form.value.title)
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title : [this.initialText, Validators.required]
    })
  }


}
