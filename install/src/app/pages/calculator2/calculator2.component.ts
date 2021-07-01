import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.scss']
})
export class Calculator2Component implements OnInit {
  public formGroup: FormGroup;

  public loanAmount: number;
  public loanPeriod: number;
  public interestRate: number;
  public annualTaxes: number;
  public annualInsurance: number;

  public totalPayment: number;
  public amountPaid: number;
  public taxes: number;
  public insurance: number;

  constructor(
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    public translate: TranslateService
  ) {
    this.loanAmount = 0;
    this.loanPeriod = 0;
    this.interestRate = 0;
    this.annualTaxes = 0;
    this.annualInsurance = 0;

    this.totalPayment = 0;
    this.amountPaid = 0;
    this.insurance = 0;
    this.taxes = 0;
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      loanAmount: [55000,],
      loanPeriod: [30,],
      interestRate: [5,],
      annualTaxes: [100,],
      annualInsurance: [100,],
    });
  }

  calculate() {
    this.loanAmount = this.formGroup.value['loanAmount'];
    this.loanPeriod = this.formGroup.value['loanPeriod'];
    this.interestRate = this.formGroup.value['interestRate'];
    this.annualTaxes = this.formGroup.value['annualTaxes'];
    this.annualInsurance = this.formGroup.value['annualInsurance'];

    this.totalPayment = (this.loanAmount * 2) / (this.loanPeriod * 12);
    this.amountPaid = (this.loanAmount * 2) / (this.loanPeriod * 12);
    this.taxes = this.annualTaxes / 12;
    this.insurance = this.annualInsurance / 12;
  }
}