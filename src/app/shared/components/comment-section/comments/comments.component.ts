import { Component, Input, OnInit } from '@angular/core';
import { CommentsInterface } from 'src/app/shared/interfaces/comments.interface';
import { CommentsService } from 'src/app/shared/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() currentUserId!: string;

  comments  : CommentsInterface[] = [];

  constructor(
    private commentsService : CommentsService
  ) {}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((comments) => {
      this.comments = comments;
    })
  }

  addComment({
    text , parentId
  } : {
    text : any;
    parentId : string | null;
  } ) :void {
    console.log('addComment' , text, parentId)
    // this.commentsService.createComment(text, parentId).subscribe(createdComment => {
    //   this.comments = [...this.comments, createdComment]
    // })
  }

}
