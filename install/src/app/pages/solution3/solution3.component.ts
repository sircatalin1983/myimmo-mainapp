import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-solution3',
  templateUrl: './solution3.component.html',
  styleUrls: ['./solution3.component.scss']
})
export class Solution3Component implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }
}