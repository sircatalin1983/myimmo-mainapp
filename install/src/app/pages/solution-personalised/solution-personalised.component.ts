import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactUs } from './../../shared/services/contact-us/contact-us';
import { ContactUsService } from './../../shared/services/contact-us/contact-us.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ErrorComponent, Helpers, InformationComponent } from 'src/app/shared/util/helpers';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { TrackerService } from 'src/app/shared/util/tracker.service';

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
    public translate: TranslateService,
    private trackerService: TrackerService
  ) { }

  ngOnInit(): void {
    this.trackerService.trackPageViews();
    
    this.contactItem.subject = '';
    this.contactItem.content = '';
    this.contactItem.email = '';
    this.contactItem.telephone = '';

    this.href = this.router.url;
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
