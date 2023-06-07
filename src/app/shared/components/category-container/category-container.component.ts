import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss']
})
export class CategoryContainerComponent {

  

    categories = []

    constructor(
      private categoryService : CategoryService
    ){}
    
    ngOnInit(): void {
      this.categoryService.getCategories()
        .subscribe(
          res => this.categories = res,
          err => console.log(err)
        )
    }


}
