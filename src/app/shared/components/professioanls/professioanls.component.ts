import { Component, OnInit } from '@angular/core';
import { ProfessionalInterface } from '../../interfaces/profesional.interface';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-professioanls',
  templateUrl: './professioanls.component.html',
  styleUrls: ['./professioanls.component.scss']
})
export class ProfessioanlsComponent implements OnInit {


  professionals : ProfessionalInterface[] = []

  constructor(
    private categoryService :  CategoryService,
    private activatedRoute : ActivatedRoute
  ) {}


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
