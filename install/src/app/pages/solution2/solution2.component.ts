import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution2.component.html',
  styleUrls: ['./solution2.component.scss']
})
export class Solution2Component implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }
}