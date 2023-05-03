import { Component, Input } from '@angular/core';
import { CommentsInterface } from '../../interfaces/comments.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment! : CommentsInterface
}
