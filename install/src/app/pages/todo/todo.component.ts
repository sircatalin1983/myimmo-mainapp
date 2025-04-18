import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from 'src/app/shared/util/tracker.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService,
    private trackerService: TrackerService
  ) { }

  ngOnInit(): void {
    this.trackerService.trackPageViews();
  }
}