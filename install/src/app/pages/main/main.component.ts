import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactUs } from './../../shared/services/contact-us/contact-us';
import { ContactUsService } from './../../shared/services/contact-us/contact-us.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public contactItem: ContactUs = new ContactUs();
  
  constructor(
    public snackBar: MatSnackBar,
    public contactUsService: ContactUsService
  ) { }

  ngOnInit(): void {
    this.contactItem.subject = '';
    this.contactItem.content = '';
    this.contactItem.email = '';
    this.contactItem.telephone = '';
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