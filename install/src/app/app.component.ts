import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myimmo-mainapp';
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'ro'])
    translate.setDefaultLang('en');

    var language = localStorage.getItem("language");
    var languageToBeUsed = language && language.match(/en|ro/) ? language : 'en';
    
    translate.use(languageToBeUsed);
    localStorage.setItem("language", languageToBeUsed);

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|ro/) ? browserLang : 'en');
    // localStorage.setItem("language", browserLang.match(/en|ro/) ? browserLang : 'en');
  }
}
