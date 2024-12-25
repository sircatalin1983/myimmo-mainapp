import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { ContactUs } from 'src/app/shared/services/contact-us/contact-us';
import { TrackerService } from 'src/app/shared/util/tracker.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.scss']
})
export class Solution1Component implements OnInit {
  public contactItem: ContactUs = new ContactUs();
  public href: string = "";
  
  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService,
    private trackerService: TrackerService
  ) { }

  ngOnInit(): void {
    this.trackerService.trackPageViews();
  }

  send(): void {

  }
}