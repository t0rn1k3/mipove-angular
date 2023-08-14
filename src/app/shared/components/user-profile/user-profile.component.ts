import { Component, OnInit, Input } from '@angular/core';
import { ProfessionalInterface } from '../../interfaces/profesional.interface';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { WorksInterface } from '../../interfaces/works.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  //@ts-ignore
  imageUrls : string[] = []
  folders = [ 'drakkar', 'greens', 'irle', 'wonderland', 'zura-totikashvili']

  constructor(
    private storage : AngularFireStorage,
    private categoryService : CategoryService,
    private activatedRoute : ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params) {
        this.profile = this.categoryService.getProfessionalById(params.id)
      }
    })

    // this.folders.forEach((folder) => {
    //   const folderRef = this.storage.ref(`${folder}/:id`);
    //   folderRef.listAll().subscribe((result) => {
    //     result.items.forEach((item) => {
    //       item.getDownloadURL().then((url) => {
    //         this.imageUrls.push(url)
    //       })
    //     })
    //   })
    // })

  }

 
  profile! : ProfessionalInterface 




  ngOnInit(): void {
  }
}
