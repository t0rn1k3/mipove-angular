import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http : HttpClient
  ) { }

  getComments() : Observable<CommentsService[]> {
    return this.http.get<CommentsService[]>(
      'http://localhost:3000/comments'
      )
  }
}
