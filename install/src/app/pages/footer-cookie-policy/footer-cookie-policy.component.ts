import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from 'src/app/shared/util/tracker.service';

@Component({
  selector: 'footer-cookie-policy',
  templateUrl: './footer-cookie-policy.component.html',
  styleUrls: ['./footer-cookie-policy.component.scss']
})
export class FooterCookiePolicyComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService,
    private trackerService: TrackerService
  ) { }

  ngOnInit(): void {
    this.trackerService.trackPageViews();
  }
} 