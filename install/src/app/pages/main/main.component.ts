import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactUs } from './../../shared/services/contact-us/contact-us';
import { ContactUsService } from './../../shared/services/contact-us/contact-us.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { ErrorComponent, Helpers, InformationComponent } from 'src/app/shared/util/helpers';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { BlogService } from 'src/app/shared/services/blog/blog.service';
import { Blog } from 'src/app/shared/services/blog/blog';
import { BlogItemCommentService } from 'src/app/shared/services/blog-item-comment/blog-item-comment.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public contactItem: ContactUs = new ContactUs();
  public assistantHref: string = "";

  public latestBlogItems: Blog[] = [];

  constructor(
    public snackBar: MatSnackBar,
    public contactUsService: ContactUsService,
    public blogService: BlogService,
    private router: Router,
    private blogItemCommentService: BlogItemCommentService,
    public translate: TranslateService
  ) {

  }

  ngOnInit(): void {
    this.contactItem.subject = '';
    this.contactItem.content = '';
    this.contactItem.email = '';
    this.contactItem.telephone = '';

    this.assistantHref = environment.assistantApp;

    Helpers.getObservable([])
      .pipe(
        switchMap(() => this.blogService.getLastThreeItems()),
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
          console.log('results:', results)
          this.latestBlogItems = results || [];
        },
        error => {

        }
      );
  }

  send(): void {
    this.contactItem.date = new Date();

    Helpers.getObservable([])
      .pipe(
        switchMap(() => this.contactUsService.addItem(this.contactItem)),
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
          this.contactItem.subject = '';
          this.contactItem.content = '';

          this.snackBar.openFromComponent(InformationComponent, {
            duration: 2000,
          });
        },
        error => {
          this.snackBar.openFromComponent(ErrorComponent, {
            duration: 2000,
          });
        }
      );
  }
}
