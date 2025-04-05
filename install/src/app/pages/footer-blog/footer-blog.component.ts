import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../services/tracker.service';

@Component({
    selector: 'app-footer-blog',
    templateUrl: './footer-blog.component.html',
    styleUrls: ['./footer-blog.component.scss']
})
export class FooterBlogComponent implements OnInit {
    constructor(
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Footer Blog');
    }
} 