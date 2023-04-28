import { Component, Input } from '@angular/core';
import { CommentsInterface } from 'src/app/shared/interfaces/comments.interface';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss']
})
export class SingleCommentComponent {


  //@ts-ignore
  @Input() comment : CommentsInterface


}
