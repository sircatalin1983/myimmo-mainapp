import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from 'src/app/shared/util/tracker.service';

@Component({
  selector: 'app-blog-contact',
  templateUrl: './blog-contact.component.html',
  styleUrls: ['./blog-contact.component.scss']
})
export class BlogContactComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    public translate: TranslateService,
    private trackerService: TrackerService
  ) {

  }

  ngOnInit(): void {
    this.trackerService.trackPageViews();
  }
}