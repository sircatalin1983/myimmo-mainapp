import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BlogService } from 'src/app/shared/services/blog/blog.service';
import { UsersService } from 'src/app/shared/services/user/user.service';
import { BlogItemCommentService } from 'src/app/shared/services/blog-item-comment/blog-item-comment.service';
import { Helpers } from 'src/app/shared/util/helpers';
import { catchError, finalize, map, switchMap, tap } from 'rxjs/operators';
import { Blog } from 'src/app/shared/services/blog/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { BlogItemComment } from 'src/app/shared/services/blog-item-comment/blog-item-comment';
import { TrackerService } from 'src/app/shared/util/tracker.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  public idBlog: number;

  public blog: Blog;
  public blogItems: Blog[] = [];

  //commentForm: FormGroup;

  onSubmit() {
    // if (this.commentForm.valid) {
    //   const formData = this.commentForm.value;
    //   // Save comment data
    //   console.log(formData);
    // }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    public translate: TranslateService,
    public blogService: BlogService,
    private blogItemCommentService: BlogItemCommentService,
    private userService: UsersService,
    private trackerService: TrackerService
  ) {

  }

  ngOnInit(): void {
    this.trackerService.trackPageViews();

    this.route.queryParams.subscribe(queryParams => {
      this.idBlog = +queryParams['id'];

      Helpers.getObservable([])
        .pipe(
          switchMap(() => this.blogService.incrementViews(this.idBlog)),
          switchMap(() => this.blogService.getItem(this.idBlog)),
          tap((blog: any) => {
            this.blog = blog;
          }),
          switchMap((blog: Blog) => {
            return this.blogItemCommentService.getCommentsByBlogItem(blog.id).pipe(
              tap((blogItemCommentList: BlogItemComment[]) => {
                this.blog.blogItemCommentList = blogItemCommentList;
              })
            );
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
            //this.blog = results;
            Helpers.consoleInfo(new Date().getTime(), this.constructor.name, Helpers.getMethodName(), "resultsx:", results)
          },
          error => {
            Helpers.consoleError(new Date().getTime(), this.constructor.name, Helpers.getMethodName(), error)
          }
        );

      Helpers.getObservable([])
        .pipe(
          switchMap(() => this.blogService.getLastThreeItems()),
          switchMap((blogItemList: Blog[]) => {
            // Step 2: For each blog item, fetch comments and user data in parallel using forkJoin
            const blogItemsWithDetails$ = blogItemList.map((item) =>
              Helpers.getObservable({
                comments: this.blogItemCommentService.getCommentsByBlogItem(item.id),
              }).pipe(
                map(({ comments }) => ({
                  ...item,
                  commentsCount: comments ? comments.length : 0,
                }))
              )
            );
            return Helpers.getObservable(blogItemsWithDetails$);
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

            Helpers.consoleInfo(new Date().getTime(), this.constructor.name, Helpers.getMethodName(), "results:", results)
          },
          error => {
            Helpers.consoleError(new Date().getTime(), this.constructor.name, Helpers.getMethodName(), error)
          }
        );
    });
  }

  navigateToBlogPost(id: number): void {
    this.router.navigate(['/blog-post', id]);
  }
}