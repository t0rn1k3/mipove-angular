import { Injectable , Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryInterface,  } from '../interfaces/category.interface';
import { ProfessionalInterface } from '../interfaces/profesional.interface';
import { filter } from 'rxjs';
import { LeadersInterface } from '../interfaces/leaders.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {




  constructor(
    private http : HttpClient
  ) { }

 



  getCategories() : CategoryInterface[] {
    return [
      {
        name  : "All"
    },
    {
    name : "Furniture",
  },
  {
    name : "Painting",
  },
  {
    name : "Chrome",
  },
  {
    name : "Watches",
  },
  {
    name : "Leather"
  },
  {
    name : "Design",
  }
    ]
  }




  getProfessionalsByTagsName(tag : string) : ProfessionalInterface[] {
    return tag == 'All' ?
      this.getAllProfessionals() :
      this.getAllProfessionals().filter(item => item.tags?.includes(tag))
  }


  
  getLeaders() : LeadersInterface[] {
    return  [
        {
            "id" : "01",
            "name" : "კაჭკაჭა",
            "profilePicture" : "/assets/images/profile-images/kach.jpg",
            "phone" : "555555555",
            "profession" : "მხატვრობა",
        },
        {
            "id" : "2",
            "name" : "ამირან კაკაურიძე",
            "profilePicture" : "/assets/images/profile-images/amiran.jpg",
            "phone" : "555555555",
            "profession" : "მხატვრობა",
        },
        {
            "id" : "3",
            "name" : "Green's Handcrafting ",
            "profilePicture" : "/assets/images/profile-images/greens.jpg",
            "phone" : "555555555",
            "profession" : "ტყავის დამუშავება",
        },
        {
            "id" : "4",
            "name" : "ირლე",
            "profilePicture" : "/assets/images/profile-images/irle.jpg",
            "phone" : "555555555",
            "profession" : "ქრომირება",
        }
    ]

  }

  getProfessionalById(id : string) : ProfessionalInterface {
    return this.getAllProfessionals().find(prof => prof.id == id)!
  }


  getAllProfessionals() : ProfessionalInterface[] {
    return  [
        {
            "id" : "01",
            "name" : "კაჭკაჭა",
            "profilePicture" : "/assets/images/profile-images/kach.jpg",
            "phone" : "555555555",
            "profession" : "მხატვრობა",
            "tags" : ['Painting', 'Design'],
            "email" : ''
        },
        {
            "id" : "2",
            "name" : "ამირან კაკაურიძე",
            "profilePicture" : "/assets/images/profile-images/amiran.jpg",
            "phone" : "555555555",
            "profession" : "მხატვრობა",
            "tags" : ['Painting'],
            "email" : ''
        },
        {
            "id" : "3",
            "name" : "Green's Handcrafting ",
            "profilePicture" : "/assets/images/profile-images/greens.jpg",
            "phone" : "555555555",
            "profession" : "ტყავის დამუშავება",
            "tags" : ['Leather'],
            "email" : ''
        },
        {
            "id" : "4",
            "name" : "ირლე",
            "profilePicture" : "/assets/images/profile-images/irle.jpg",
            "phone" : "555555555",
            "profession" : "ქრომირება",
            "tags" : ['Chrome'],
            "email" : ''
        }
    ]

  }
}
 