import { Component, Input, OnInit } from '@angular/core';
import { LeadersInterface } from '../../interfaces/leaders.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  // @ts-ignore
  @Input() leaders ;




  constructor() {}

  ngOnInit(): void {
  }

}
