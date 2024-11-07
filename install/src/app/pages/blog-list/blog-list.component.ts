import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Helpers } from 'src/app/shared/util/helpers';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { Blog } from 'src/app/shared/services/blog/blog';
import { BlogService } from 'src/app/shared/services/blog/blog.service';
import { BlogItemCommentService } from 'src/app/shared/services/blog-item-comment/blog-item-comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  public blogItems: Blog[] = [];

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    public blogService: BlogService,
    private blogItemCommentService: BlogItemCommentService,
    public translate: TranslateService
  ) {

  }

  ngOnInit(): void {
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