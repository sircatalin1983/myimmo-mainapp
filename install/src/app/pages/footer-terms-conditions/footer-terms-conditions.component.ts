import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from 'src/app/shared/util/tracker.service';

@Component({
  selector: 'footer-terms-conditions',
  templateUrl: './footer-terms-conditions.component.html',
  styleUrls: ['./footer-terms-conditions.component.scss']
})
export class FooterTermsConditionsComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService,
    private trackerService: TrackerService
  ) { }

  ngOnInit(): void {
    this.trackerService.trackPageViews();
  }
} 