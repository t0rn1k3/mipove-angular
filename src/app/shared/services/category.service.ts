import { Injectable , Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryInterface,  } from '../interfaces/category.interface';
import { ProfessionalInterface } from '../interfaces/profesional.interface';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categoryUrl = 'http://localhost:3000/api/categories'
  private _leaders = 'http://localhost:3000/api/leaders'
  private _professionals = 'http://localhost:3000/api/professionals'
  



  constructor(
    private http : HttpClient
  ) { }

  getCategories(){
    return this.http.get<any>(this._categoryUrl)
  }

  getLeaders(){
    return this.http.get<any>(this._leaders)
  }

  getProfessionals(){
    return this.http.get<any>(this._professionals)
  }

  getProfById(id : string)  {
    return this.getProfessionals()
      .pipe(
        filter(prof => prof.id == id)
      )
  }

}
