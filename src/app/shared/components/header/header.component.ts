import { Component , OnInit , Directive, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @HostBinding('class.navbar-opened') isActive = false;



  toggleActive(): void {
    this.isActive = !this.isActive;
    console.log('click')
  }


ngOnInit(): void {
  
}
}


