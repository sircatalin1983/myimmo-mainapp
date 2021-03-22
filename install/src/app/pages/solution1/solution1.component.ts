import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.scss']
})
export class Solution1Component implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }
}