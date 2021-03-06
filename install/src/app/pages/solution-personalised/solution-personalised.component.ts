import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactUs } from './../../shared/services/contact-us/contact-us';
import { ContactUsService } from './../../shared/services/contact-us/contact-us.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-solution3',
  templateUrl: './solution-personalised.component.html',
  styleUrls: ['./solution-personalised.component.scss']
})
export class SolutionPersonalisedComponent implements OnInit {
  public contactItem: ContactUs = new ContactUs();
  public href: string = "";

  constructor(
    public snackBar: MatSnackBar,
    public contactUsService: ContactUsService,
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.contactItem.subject = '';
    this.contactItem.content = '';
    this.contactItem.email = '';
    this.contactItem.telephone = '';

    this.href = this.router.url;
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