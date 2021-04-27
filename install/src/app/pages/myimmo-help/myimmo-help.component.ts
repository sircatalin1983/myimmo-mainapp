import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pricing',
  templateUrl: './myimmo-help.component.html',
  styleUrls: ['./myimmo-help.component.scss']
})
export class MyImmoHelpComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }
}