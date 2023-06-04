import { Component, Input, OnInit } from '@angular/core';
import { CommentsInterface } from '../../interfaces/comments.interface';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  
  @Input() currentUserId! : string;

  comments : CommentsInterface[] = []
  
  constructor(
    private commentService : CommentsService
  ){}

  addComment({text, parentId}: {text : string, parentId : null | string}) {
    this.commentService.createComment(text, parentId).subscribe(createdComment => {
      this.comments = [...this.comments, createdComment]
    })
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments
    })
  }
}
