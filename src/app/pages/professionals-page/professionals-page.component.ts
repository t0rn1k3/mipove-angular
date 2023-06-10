import { Component, Input, OnInit } from '@angular/core';
import { CategoryInterface,  } from 'src/app/shared/interfaces/category.interface';
import { ProfessionalInterface } from 'src/app/shared/interfaces/profesional.interface';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professionals-page',
  templateUrl: './professionals-page.component.html',
  styleUrls: ['./professionals-page.component.scss']
})
export class ProfessionalsPageComponent implements OnInit{


  professionals : ProfessionalInterface[] = []

  constructor(
    private categoryService : CategoryService,
    private activatedRoute :  ActivatedRoute
  ){
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        // this.prof = categoryService.getProfById(params.id)
      }
    })
  }

  ngOnInit(): void {
    this.categoryService.getProfessionals()
      .subscribe(
        res => this.professionals = res,
        err => console.log(err)
      )
  }



}
