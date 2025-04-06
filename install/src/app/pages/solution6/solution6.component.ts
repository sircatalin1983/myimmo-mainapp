import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { ContactUs } from 'src/app/shared/services/contact-us/contact-us';
import { ContactUsService } from 'src/app/shared/services/contact-us/contact-us.service';
import { ErrorComponent, Helpers, InformationComponent } from 'src/app/shared/util/helpers';
import { TrackerService } from 'src/app/shared/util/tracker.service';

@Component({
  selector: 'app-solution6',
  templateUrl: './solution6.component.html',
  styleUrls: ['./solution6.component.scss']
})
export class Solution6Component implements OnInit {
  public contactItem: ContactUs = new ContactUs();

  constructor(
    public snackBar: MatSnackBar,
    public contactUsService: ContactUsService,
    public translate: TranslateService,
    private trackerService: TrackerService
  ) { }

  ngOnInit(): void {
    this.contactItem.subject = '';
    this.contactItem.content = '';
    this.contactItem.email = '';
    this.contactItem.telephone = '';

    this.trackerService.trackPageViews();
  }

  send(): void {
    this.contactItem.date = new Date();

    Helpers.getObservable([])
      .pipe(
        switchMap(() => this.contactUsService.addItem(this.contactItem)),
        catchError(
          error => {
            throw error;
          }
        ),
        finalize(() => {
        }),
      )
      .subscribe(
        results => {
          this.contactItem.subject = '';
          this.contactItem.content = '';

          this.snackBar.openFromComponent(InformationComponent, {
            duration: 2000,
          });
        },
        error => {
          this.snackBar.openFromComponent(ErrorComponent, {
            duration: 2000,
          });
        }
      );
  }
}