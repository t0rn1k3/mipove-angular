import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  private url = 'https://mailthis.to/mipove'

  constructor(
    private http : HttpClient, 
    private router : Router
  ) { }


  SendEmail(input: any) {
    return this.http.post(this.url, input, {responseType : 'text'}).pipe(
      map(
        (response) => {
            if (response) {
              this.router.navigate([''])
            }
        },
        (error : any) => {
            if (error) {
        return error
            }
         }
      )
        )
      }
  
}
