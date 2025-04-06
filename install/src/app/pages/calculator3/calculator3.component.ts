import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ContactUs } from 'src/app/shared/services/contact-us/contact-us';
import { ContactUsService } from 'src/app/shared/services/contact-us/contact-us.service';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { ErrorComponent, Helpers, InformationComponent } from 'src/app/shared/util/helpers';

@Component({
  selector: 'app-pricing',
  templateUrl: './calculator3.component.html',
  styleUrls: ['./calculator3.component.scss']
})
export class Calculator3Component implements OnInit {
  public contactItem: ContactUs = new ContactUs();
  public formGroup: FormGroup;

  public monthlyRate: number;
  public moveInDate: Date;

  public rentPerDay: number;
  public prorateDays: number;
  public prorateRent: number;

  constructor(
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    public contactUsService: ContactUsService,
    public translate: TranslateService
  ) {
    this.monthlyRate = 0;
    this.moveInDate = new Date(Date.now());

    this.rentPerDay = 0;
    this.prorateDays = 0;
    this.prorateRent = 0;
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      monthlyRate: [0,],
      moveInDate: [null,],
    });
  }

  calculate() {
    this.monthlyRate = this.formGroup.value['monthlyRate'];
    this.moveInDate = new Date(this.formGroup.value['moveInDate']);

    let firstOfNextMonth = new Date(this.moveInDate.getFullYear(), this.moveInDate.getMonth() + 1, 1);
    let daysDiff = Math.ceil((firstOfNextMonth.valueOf() - this.moveInDate.valueOf()) / (1000 * 3600 * 24));

    this.rentPerDay = this.monthlyRate / this.daysInMonth(this.moveInDate.getDate(), this.moveInDate.getFullYear());
    this.prorateDays = daysDiff;
    this.prorateRent = this.rentPerDay * daysDiff;
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
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