import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactUs } from './../../shared/services/contact-us/contact-us';
import { ContactUsService } from './../../shared/services/contact-us/contact-us.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public contactItem: ContactUs = new ContactUs();
  public href: string = "";
  public assistantHref: string = "";

  constructor(
    public snackBar: MatSnackBar,
    public contactUsService: ContactUsService,
    private router: Router,
    public translate: TranslateService
  ) {

  }

  ngOnInit(): void {
    this.contactItem.subject = '';
    this.contactItem.content = '';
    this.contactItem.email = '';
    this.contactItem.telephone = '';

    this.href = this.router.url;
    this.assistantHref = environment.assistantApp;
  }

  send(): void {
    this.contactItem.date = new Date();

    this.contactUsService.addItem(this.contactItem).subscribe(() => {
      this.contactItem.subject = '';
      this.contactItem.content = '';

      this.snackBar.openFromComponent(InformationComponent, {
        duration: 2000,
      });
    });
  }

}

@Component({
  selector: 'information-message',
  //templateUrl: 'information-message.component.html',
  template: `
            <span class="success-message">
              Mesajul salvat cu success!!!
            </span>`,
  styles: [`
    .success-message {
      color: #90EE90;
      text-align: center;
    }
  `],
})
export class InformationComponent { }