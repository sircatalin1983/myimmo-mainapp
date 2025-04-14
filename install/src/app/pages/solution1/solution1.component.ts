import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { ContactUs } from 'src/app/shared/services/contact-us/contact-us';
import { TrackerService } from 'src/app/shared/util/tracker.service';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { ErrorComponent, Helpers, InformationComponent } from 'src/app/shared/util/helpers';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { ContactUsService } from 'src/app/shared/services/contact-us/contact-us.service';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.scss']
})
export class Solution1Component implements OnInit {
  public contactItem: ContactUs = new ContactUs();
  public href: string = "";

  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService,
    private trackerService: TrackerService,
    public contactUsService: ContactUsService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Propero - Solutions');
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

  features = [
    {
      icon: 'assets/images/solution1/feature1.svg',
      title: 'Feature 1',
      description: 'Description for feature 1 goes here. This explains the main benefit of this feature.'
    },
    {
      icon: 'assets/images/solution1/feature2.svg',
      title: 'Feature 2',
      description: 'Description for feature 2 goes here. This explains the main benefit of this feature.'
    },
    {
      icon: 'assets/images/solution1/feature3.svg',
      title: 'Feature 3',
      description: 'Description for feature 3 goes here. This explains the main benefit of this feature.'
    }
  ];
}