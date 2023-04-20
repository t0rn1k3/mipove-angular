import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LeadersInterface } from '../../interfaces/leaders.interface';

@Component({
  selector: 'app-leaders-container',
  templateUrl: './leaders-container.component.html',
  styleUrls: ['./leaders-container.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class LeadersContainerComponent implements OnInit {

  // @ts-ignore
  leadersList : LeadersInterface = [];

  leaders = [
    {
      name : 'Irle',
      profession : 'chrome art',
      phone : 555462090,
      imagePath : './assets/images/profile-images/irle.jpg',
      instagram : 'https://www.instagram.com/__irle___/',
    },
    {
      name : "Green's handcafting",
      profession : 'Hand crafting',
      phone : 555462090,
      imagePath : './assets/images/profile-images/greens.jpg',
    },
    {
      name : 'Irle',
      profession : 'chrome art',
      phone : 555462090,
      imagePath : './assets/images/profile-images/irle.jpg'
    },
    {
      name : "Green's handcafting",
      profession : 'Hand crafting',
      phone : 555462090,
      imagePath : './assets/images/profile-images/greens.jpg'
    },
  ]

  constructor(){}

  ngOnInit(): void {
  }



}
