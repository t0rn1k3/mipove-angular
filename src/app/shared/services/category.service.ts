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
    name : "Miniature",
  },
  {
    name : "Painting",
  },
  {
    name : "Statues",
  },
  {
    name : "Handmade Toys",
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
        // {
        //     "id" : "01",
        //     "name" : "კაჭკაჭა",
        //     "profilePicture" : "/assets/images/profile-images/kach.jpg",
        //     "phone" : "555555555",
        //     "profession" : "მხატვრობა",
        // },
      
        {
            "id" : "3",
            "name" : "Green's Handcrafting ",
            "profilePicture" : "/assets/images/profile-images/greens.jpg",
            "phone" : "",
            "profession" : "ტყავის დამუშავება",
        },
        {
            "id" : "4",
            "name" : "ირლე",
            "profilePicture" : "/assets/images/profile-images/irle.jpg",
            "phone" : "593 366 366",
            "profession" : "ქანდაკებები",
        },
        {
          "id" : "5",
          "name" : "ზურაბ ტოტიკაშვილი",
          "profilePicture" : "/assets/images/profile-images/zura-totikashvili.jpg",
          "phone" : "568 788 874",
          "profession" : "მხატვარი",
      },
      {
        "id" : "6",
        "name" : "დრაკარი. Drakkar.",
        "profilePicture" : "/assets/images/profile-images/drakar.jpg",
        "phone" : "591 44 73 38",
        "profession" : "მინიატურა",
    },
    {
      "id" : "7",
      "name" : "Handmade Wonderland",
      "profilePicture" : "/assets/images/profile-images/wonderland.png",
      "phone" : "557 111 991",
      "profession" : "ხელნაკეთი სათამაშოები",
  },
  {
    "id" : "2",
    "name" : "ამირან კაკაურიძე",
    "profilePicture" : "/assets/images/profile-images/amiran.jpg",
    "phone" : "555555555",
    "profession" : "მხატვრობა",
},
    ]

  }

  getProfessionalById(id : string) : ProfessionalInterface {
    return this.getAllProfessionals().find(prof => prof.id == id)!
  }


  getAllProfessionals() : ProfessionalInterface[] {
    return  [
        // {
        //     "id" : "1",
        //     "name" : "კაჭკაჭა",
        //     "profilePicture" : "/assets/images/profile-images/kach.jpg",
        //     "phone" : "555555555",
        //     "profession" : "მხატვრობა",
        //     "tags" : ['Painting', 'Design'],
        //     "email" : 'email@info.com',
        //     "facebook" : 'facebook media icon',
        //     "instagram" : '',
        //     "webPage" : '',
        //     "works" : ['']
        // },
        {
            "id" : "2",
            "name" : "ამირან კაკაურიძე",
            "profilePicture" : "/assets/images/profile-images/amiran.jpg",
            "phone" : "555555555",
            "profession" : "მხატვრობა",
            "tags" : ['Painting'],
            "email" : 'email@info.com',
            "facebook" : 'facebook media icon',
            "instagram" : '',
            "webPage" : '',
            "works" : ['']
        },
        {
            "id" : "3",
            "name" : "Green's Handcrafting ",
            "profilePicture" : "/assets/images/profile-images/greens.jpg",
            "phone" : "",
            "profession" : "ტყავის დამუშავება",
            "tags" : ['Leather'],
            "email" : 'email@info.com',
            "facebook" : 'https://www.facebook.com/greenshandcrafting',
            "instagram" : 'https://www.instagram.com/greenshandcrafting/?hl=en',
            "webPage" : '',
            "works" : [ 
              "/assets/images/greens/green1.jpg",
              "/assets/images/greens/green2.jpg",
              "/assets/images/greens/green3.jpg",
              "/assets/images/greens/green4.jpg",
              "/assets/images/greens/green5.jpg",
              "/assets/images/greens/green6.jpg",
              "/assets/images/greens/green7.jpg",
              "/assets/images/greens/green8.jpg",
              "/assets/images/greens/green9.jpg",
              "/assets/images/greens/green10.jpg",
              "/assets/images/greens/green11.jpg",
              "/assets/images/greens/green12.jpg",
              "/assets/images/greens/green13.jpg",
              "/assets/images/greens/green14.jpg",
              "/assets/images/greens/green15.jpg",
              "/assets/images/greens/green16.jpg",
              "/assets/images/greens/green17.jpg",
              "/assets/images/greens/green18.jpg",
              "/assets/images/greens/green19.jpg",
              "/assets/images/greens/green20.jpg",
              "/assets/images/greens/green21.jpg",
              "/assets/images/greens/green22.jpg",
              "/assets/images/greens/green23.jpg",
              "/assets/images/greens/green24.jpg",
              "/assets/images/greens/green25.jpg",
              "/assets/images/greens/green26.jpg",
              "/assets/images/greens/green27.jpg",
              "/assets/images/greens/green28.jpg",
              "/assets/images/greens/green29.jpg",
              "/assets/images/greens/green30.jpg",
              "/assets/images/greens/green31.jpg",
              "/assets/images/greens/green32.jpg",
              "/assets/images/greens/green33.jpg",
              "/assets/images/greens/green34.jpg",
            ]

        },
        {
            "id" : "4",
            "name" : "ირლე",
            "profilePicture" : "/assets/images/profile-images/irle.jpg",
            "phone" : "593 366 366",
            "profession" : "ქრომირება",
            "tags" : ['Statues'],
            "email" : 'irleart22@gmail.com',
            "facebook" : 'https://www.facebook.com/irleart',
            "instagram" : 'https://www.instagram.com/__irle___/?hl=en',
            "webPage" : '',
            "works" : [
              "/assets/images/irle/irle1.jpg",
              "/assets/images/irle/irle2.jpg",
              "/assets/images/irle/irle3.jpg",
              "/assets/images/irle/irle4.jpg",
              "/assets/images/irle/irle5.jpg",
              "/assets/images/irle/irle6.jpg",
              "/assets/images/irle/irle7.jpg",
              "/assets/images/irle/irle8.jpg",
              "/assets/images/irle/irle9.jpg",
              "/assets/images/irle/irle10.jpg",
              "/assets/images/irle/irle11.jpg",
              "/assets/images/irle/irle12.jpg",
              "/assets/images/irle/irle13.jpg",
              "/assets/images/irle/irle14.jpg",
            ]

        },
        {
          "id" : "5",
          "name" : "ზურაბ ტოტიკაშვილი",
          "profilePicture" : "/assets/images/profile-images/zura-totikashvili.jpg",
          "phone" : "568 788 874",
          "profession" : "მხატვარი",
          "tags" : ['Painting'],
          "email" : 'zutotikashvili@gmail.com',
          "facebook" : 'https://www.facebook.com/zutotikashvili?mibextid=ZbWKwL',
          "instagram" : 'https://instagram.com/totikashvilizurab?igshid=NGExMmI2YTkyZg==',
          "webPage" : '',
          "works" : [
            "/assets/images/zura-totikashvili/zura-1.jpg",
            "/assets/images/zura-totikashvili/zura-2.jpg",
            "/assets/images/zura-totikashvili/zura-3.jpg",
            "/assets/images/zura-totikashvili/zura-4.jpg",
            "/assets/images/zura-totikashvili/zura-5.jpg",
            "/assets/images/zura-totikashvili/zura-6.jpg",
            "/assets/images/zura-totikashvili/zura-7.jpg",
            "/assets/images/zura-totikashvili/zura-8.jpg",
            "/assets/images/zura-totikashvili/zura-9.jpeg",
            "/assets/images/zura-totikashvili/zura-10.jpg",
            "/assets/images/zura-totikashvili/zura-11.jpg",
            "/assets/images/zura-totikashvili/zura-12.jpg",
            "/assets/images/zura-totikashvili/zura-13.jpg",
            "/assets/images/zura-totikashvili/zura-14.jpg",
            "/assets/images/zura-totikashvili/zura-15.jpg",
            "/assets/images/zura-totikashvili/zura-16.jpg",
            "/assets/images/zura-totikashvili/zura-17.jpg",
            "/assets/images/zura-totikashvili/zura-18.jpg",
          ]
      },
      {
        "id" : "6",
        "name" : "დრაკარი. Drakkar.",
        "profilePicture" : "/assets/images/profile-images/drakar.jpg",
        "phone" : "591 44 73 38",
        "profession" : "მინიატურა",
        "tags" : ['Miniature'],
        "email" : 'info@drakkar.ge',
        "facebook" : 'https://www.facebook.com/Drakkarmastery',
        "instagram" : '',
        "webPage" : 'https://www.drakkar.ge/ka',
        "works" : [
          "/assets/images/drakkar/drak1.jpg",
          "/assets/images/drakkar/drak2.jpg",
          "/assets/images/drakkar/drak3.jpg",
          "/assets/images/drakkar/drak4.jpg",
          "/assets/images/drakkar/drak5.jpg",
          "/assets/images/drakkar/drak6.JPG",
          "/assets/images/drakkar/drak7.JPG",
          "/assets/images/drakkar/drak8.JPG",
        ]
    },
    {
      "id" : "7",
      "name" : "Handmade Wonderland",
      "profilePicture" : "/assets/images/profile-images/wonderland.png",
      "phone" : " 557 111 991",
      "profession" : "ხელნაკეთი სათამაშოები",
      "tags" : ['Handmade Toys'],
      "email" : 'abesadzen777@gmail.com',
      "facebook" : 'https://www.facebook.com/ocho.kocho.1',
      "instagram" : '',
      "webPage" : '',
      "works" : [
        "/assets/images/wonderland/wond1.png",
        "/assets/images/wonderland/wond2.png",
        "/assets/images/wonderland/wond3.png",
        "/assets/images/wonderland/wond5.png",
        "/assets/images/wonderland/wond6.png",
        "/assets/images/wonderland/wond7.png",
        "/assets/images/wonderland/wond8.png",
        "/assets/images/wonderland/wond9.png",
        "/assets/images/wonderland/wond10.png",
        "/assets/images/wonderland/wond11.png",
        "/assets/images/wonderland/wond12.png",
        "/assets/images/wonderland/wond13.png",
      ]

  },
    ]

  }
}
 