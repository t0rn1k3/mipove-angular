import { Component, Input, OnInit } from '@angular/core';
import { CommentsInterface } from '../../interfaces/comments.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  //@ts-ignore
  @Input() currentUserId! : string
  @Input() replies! : CommentsInterface[];

  canReply : boolean = false
  canEdit : boolean = false
  canDelete : boolean = false

  @Input() comment! : CommentsInterface

  ngOnInit(): void {
    const fiveMinutes = 300000;
    const timePassed = new Date().getMilliseconds() - new Date(this.comment.createdAt).getMilliseconds() > fiveMinutes
    this.canReply = Boolean(this.currentUserId)
    this.canEdit = this.currentUserId === this.comment.userId && !timePassed
    this.canDelete = this.currentUserId === this.comment.userId && !timePassed && this.replies.length === 0
  }
}
