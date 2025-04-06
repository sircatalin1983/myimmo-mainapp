import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../services/tracker.service';
import { Blog } from 'src/app/shared/services/blog/blog';
import { BlogItemCommentService } from 'src/app/shared/services/blog-item-comment/blog-item-comment.service';
import { BlogService } from 'src/app/shared/services/blog/blog.service';
import { Helpers } from 'src/app/shared/util/helpers';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer-blog',
    templateUrl: './footer-blog.component.html',
    styleUrls: ['./footer-blog.component.scss']
})
export class FooterBlogComponent implements OnInit {
    public blogItems: Blog[] = [];

    constructor(
        private router: Router,
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        public blogService: BlogService,
        private blogItemCommentService: BlogItemCommentService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Footer Blog');

        Helpers.getObservable([])
            .pipe(
                switchMap(() => this.blogService.getItems()),
                switchMap((blogItemList: Blog[]) => {
                    // Step 2: For each blog item, fetch comments
                    const blogItemsWithComments$ = blogItemList.map((item) =>
                        this.blogItemCommentService.getCommentsByBlogItem(item.id).pipe(
                            map((comments) => ({ ...item, commentsCount: comments ? comments.length : 0 }))
                        )
                    );
                    return Helpers.getObservable(blogItemsWithComments$);
                }),
                catchError(
                    error => {
                        throw error;
                    }
                ),
                finalize(() => {
                }),
            )
            .subscribe(
                results => {
                    this.blogItems = results || [];
                },
                error => {

                }
            );
    }

    navigateToBlogPost(id: number): void {
        this.router.navigate(['/blog-post', id]);
    }
} 