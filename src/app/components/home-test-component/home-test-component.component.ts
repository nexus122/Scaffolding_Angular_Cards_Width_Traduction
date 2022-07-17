import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-home-test-component',
  templateUrl: './home-test-component.component.html',
  styleUrls: ['./home-test-component.component.scss']
})
export class HomeTestComponentComponent implements OnInit {

  randomNumber: number = Math.floor(Math.random() * 999);

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    if(!translate.currentLang){
      translate.use('en');
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit(): void {
  }

}
