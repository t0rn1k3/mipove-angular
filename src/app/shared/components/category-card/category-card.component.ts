import { Component , Input, OnInit} from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent  implements OnInit{


//@ts-ignore
@Input() categories

ngOnInit(): void {
  
}

}
