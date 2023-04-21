import { Component , OnInit} from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {


  constructor(
    public translateService: TranslateService
  ) {}

  ngOnInit(): void {
    
  }

  setLang(lang: string) {
    this.translateService.use(lang);
  }

}
