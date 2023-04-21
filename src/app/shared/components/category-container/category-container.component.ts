import { Component } from '@angular/core';
import { CategoryInterface } from '../../interfaces/category.interface';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss']
})
export class CategoryContainerComponent {

    // @ts-ignore
    categories : CategoryInterface = []


  cards = [
    {
      name: 'ავეჯის დამზადება/ შეკეთება',
      linkPath : '/furniture'
    },
    {
      name: 'ხელოვნება',
      linkPath : '/art'
    },
    {
      name: 'ქრომირება',
      linkPath : '/chrome'
    },
    {
      name: 'საათის შეკეთება',
      linkPath : '/watches'
    },
    {
      name: 'ტყავის დამუშავება',
      linkPath : '/leather'
    },
    {
      name: 'დიზაინი',
      linkPath : '/design'
    }
  ]


}
