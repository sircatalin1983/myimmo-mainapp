import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.scss']
})
export class Calculator1Component implements OnInit {
  public formGroup: FormGroup;

  public propertyPrice: number;
  public montlyRent: number;
  public anualExpenses: number;
  public occupationRate: number;

  public grossRentalYield: number;
  public netRentalYield: number;
  public cashflow: number;
  public paybackPeriod: number;

  constructor(
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    public translate: TranslateService
  ) {
    this.propertyPrice = 0;
    this.montlyRent = 0;
    this.anualExpenses = 0;
    this.occupationRate = 100;
    this.grossRentalYield = 0;
    this.netRentalYield = 0;
    this.cashflow = 0;
    this.paybackPeriod = 0;
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      propertyPrice: [120000,],
      montlyRent: [500,],
      anualExpenses: [1000,],
      occupationRate: [100,],
    });
  }

  calculate() {
    this.propertyPrice = this.formGroup.value['propertyPrice'];
    this.montlyRent = this.formGroup.value['montlyRent'];
    this.anualExpenses = this.formGroup.value['anualExpenses'];
    this.occupationRate = this.formGroup.value['occupationRate'];

    let yearlyVacancyRateLossPercent = ((100 - this.occupationRate) / 100);

    this.grossRentalYield = ((this.montlyRent * 12) / this.propertyPrice) * 100;
    this.netRentalYield = (((this.montlyRent * 12) - this.anualExpenses) / this.propertyPrice) * 100;
    let adjustedAnnualRent = this.montlyRent * 12 * (this.occupationRate / 100);
    this.cashflow = adjustedAnnualRent - this.anualExpenses;
    this.paybackPeriod = this.propertyPrice / this.cashflow;

  }
}