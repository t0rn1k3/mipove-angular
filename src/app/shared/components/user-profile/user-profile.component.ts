import { Component, OnInit, Input } from '@angular/core';
import { ProfessionalInterface } from '../../interfaces/profesional.interface';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private categoryService : CategoryService,
    private activatedRoute : ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params) {
        this.profile = this.categoryService.getProfessionalById(params.id)
      }
    })
  }

 
  profile! : ProfessionalInterface 

  ngOnInit(): void {
  }
}
