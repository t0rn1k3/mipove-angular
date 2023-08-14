import { Component , OnInit , HostBinding,} from '@angular/core';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @HostBinding('class.navbar-opened') isActive = false;



  toggleActive(): void {
    this.isActive = !this.isActive;
  }


ngOnInit(): void {
  
}
}


