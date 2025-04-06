import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { ContactUs } from 'src/app/shared/services/contact-us/contact-us';
import { ContactUsService } from 'src/app/shared/services/contact-us/contact-us.service';
import { ErrorComponent, Helpers, InformationComponent } from 'src/app/shared/util/helpers';
import { TrackerService } from 'src/app/shared/util/tracker.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  public contactItem: ContactUs = new ContactUs();
  public href: string = "";

  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService,
    private trackerService: TrackerService,
    public contactUsService: ContactUsService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Solution 1 - MyImmo');
  }

  ngOnInit(): void {
    this.trackerService.trackPageViews();
    window.scrollTo(0, 0);
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