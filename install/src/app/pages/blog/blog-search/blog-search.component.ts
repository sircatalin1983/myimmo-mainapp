import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html',
  styleUrls: ['./blog-search.component.scss']
})
export class BlogSearchComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    public translate: TranslateService
  ) {

  }

  ngOnInit(): void {

  }
}