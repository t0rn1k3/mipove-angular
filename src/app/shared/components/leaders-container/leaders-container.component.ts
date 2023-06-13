import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { LeadersInterface } from '../../interfaces/leaders.interface';
import { CategoryService } from '../../services/category.service';
CategoryService

@Component({
  selector: 'app-leaders-container',
  templateUrl: './leaders-container.component.html',
  styleUrls: ['./leaders-container.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class LeadersContainerComponent implements OnInit {


 leaders : LeadersInterface[] = []

  constructor(
    private leaderService : CategoryService
  ){}

  ngOnInit(): void {

    this.leaders = this.leaderService.getLeaders()

  }


}
