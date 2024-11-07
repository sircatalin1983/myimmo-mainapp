import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-contact',
  templateUrl: './blog-contact.component.html',
  styleUrls: ['./blog-contact.component.scss']
})
export class BlogContactComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    public translate: TranslateService
  ) {

  }

  ngOnInit(): void {

  }
}