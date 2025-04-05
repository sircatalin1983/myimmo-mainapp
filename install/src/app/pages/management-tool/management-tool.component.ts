import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from 'src/app/shared/util/tracker.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './management-tool.component.html',
  styleUrls: ['./management-tool.component.scss']
})
export class ManagementToolComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService,
    private trackerService: TrackerService
  ) { }

  ngOnInit(): void {
    this.trackerService.trackPageViews();
  }
}