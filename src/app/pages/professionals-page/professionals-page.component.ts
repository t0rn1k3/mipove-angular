import { Component, Input, OnInit } from '@angular/core';
import { CategoryInterface,  } from 'src/app/shared/interfaces/category.interface';
import { ProfessionalInterface } from 'src/app/shared/interfaces/profesional.interface';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-professionals-page',
  templateUrl: './professionals-page.component.html',
  styleUrls: ['./professionals-page.component.scss']
})
export class ProfessionalsPageComponent implements OnInit{


  //@ts-ignore
  professionals : ProfessionalInterface[] = []

  constructor(
    private categoryService : CategoryService
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
