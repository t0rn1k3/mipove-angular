import { Component, OnInit } from '@angular/core';
import { ProfessionalInterface } from 'src/app/shared/interfaces/profesional.interface';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  
  professionals : ProfessionalInterface[] = []

  constructor(
    private categoryService : CategoryService,
  ){
  }

  ngOnInit(): void {
    this.categoryService.getProfessionals()
      .subscribe(
        res => this.professionals = res,
        err => console.log(err)
      )
  }
}
