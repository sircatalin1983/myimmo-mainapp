import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();

  constructor(
    public translate: TranslateService
  ) {
    var language = localStorage.getItem("language");
    translate.use(language && language.match(/en|ro/) ? language : 'en');
    localStorage.setItem("language", language.match(/en|ro/) ? language : 'en');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  onChangeLanguage(language) {
    localStorage.setItem("language", language);
    this.translate.use(language);
  }

  getLanguage(parameterInput) {
    let returnLanguage = "Română";

    switch (parameterInput) {
      case "ro":
        returnLanguage = "Română";
        break;
      case "en":
        returnLanguage = "English";
        break;
      default:
        returnLanguage = "Română";
        break;
    }

    return returnLanguage;
  }
}
