import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.scss']
})
export class BlogLayoutComponent implements OnInit, OnDestroy {
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
