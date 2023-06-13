import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessionalInterface } from 'src/app/shared/interfaces/profesional.interface';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-professional-profile-page',
  templateUrl: './professional-profile-page.component.html',
  styleUrls: ['./professional-profile-page.component.scss']
})
export class ProfessionalProfilePageComponent implements OnInit {


//@ts-ignore 
  professional : ProfessionalInterface

  constructor(
    private activatedRoute : ActivatedRoute,
    private categoryService : CategoryService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params) {
        this.professional = this.categoryService.getProfessionalById(params.id)
      }
    })
  }


  ngOnInit(): void {
    
  }

}
