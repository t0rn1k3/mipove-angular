import { Component, OnInit } from '@angular/core';
import { ProfessionalInterface } from 'src/app/shared/interfaces/profesional.interface';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  

  professionals : ProfessionalInterface[] =[  ]

  constructor(
    private categoryService : CategoryService,
    private activatedRoute : ActivatedRoute
  ){
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      if(params.tag){
        this.professionals = this.categoryService.getProfessionalsByTagsName(params.tag)
      }
      else {
        this.professionals = this.categoryService.getAllProfessionals()
      }
    })

  }
}
