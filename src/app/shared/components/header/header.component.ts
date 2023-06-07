import { Component , OnInit} from '@angular/core';
import { CategoryInterface } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


ngOnInit(): void {
  
}
}


