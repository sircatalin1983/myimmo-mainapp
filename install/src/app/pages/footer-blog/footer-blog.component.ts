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
import { BlogCategoryService } from '../../shared/services/blog-category/blog-category.service';
import { BlogCategory } from '../../shared/services/blog-category/blog-category';

@Component({
    selector: 'app-footer-blog',
    templateUrl: './footer-blog.component.html',
    styleUrls: ['./footer-blog.component.scss']
})
export class FooterBlogComponent implements OnInit {
    public blogItems: Blog[] = [];
    selectedCategory: string | null = null;
    categories: BlogCategory[] = [];

    // Pagination
    currentPage: number = 1;
    itemsPerPage: number = 6;
    totalPages: number = 1;

    constructor(
        private router: Router,
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        public blogService: BlogService,
        private blogItemCommentService: BlogItemCommentService,
        private trackerService: TrackerService,
        private blogCategoryService: BlogCategoryService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Footer Blog');
        this.loadCategories();
        this.loadBlogItems();
    }

    loadCategories(): void {
        this.blogCategoryService.getAll().subscribe({
            next: (categories) => {
                this.categories = categories.filter(cat => cat && cat.name); // Ensure we have valid categories
                // Sort categories by displayName (fallback to name if displayName is not available)
                this.categories.sort((a, b) => {
                    const displayNameA = a.displayName || a.name;
                    const displayNameB = b.displayName || b.name;
                    return displayNameA.localeCompare(displayNameB);
                });
            },
            error: (error) => {
                console.error('Error loading categories:', error);
                this.categories = [];
            }
        });
    }

    loadBlogItems(): void {
        Helpers.getObservable([])
            .pipe(
                switchMap(() => this.blogService.getItems()),
                switchMap((blogItemList: any[]) => {
                    const blogItemsWithComments$ = blogItemList.map((item) =>
                        this.blogItemCommentService.getCommentsByBlogItem(item.id).pipe(
                            map((comments) => {
                                const { BlogCategory, ...rest } = item;

                                return {
                                    ...rest,
                                    blogCategory: BlogCategory,
                                    commentsCount: comments ? comments.length : 0
                                };
                            })
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
                    console.log('Loaded blog items:', this.blogItems); // Debug log
                    this.filterItems(this.selectedCategory);
                },
                error => {
                    //console.error('Error loading blog items:', error);
                    this.blogItems = [];
                    this.filterItems(null);
                }
            );
    }

    filterItems(category: string | null = null): void {
        this.selectedCategory = category;
        this.currentPage = 1; // Reset to first page when filtering

        let filteredItems = this.blogItems;
        if (category) {
            filteredItems = this.blogItems.filter(item =>
                item.blogCategory?.name === category
            );
        }

        this.totalPages = Math.max(1, Math.ceil(filteredItems.length / this.itemsPerPage));
        // console.log('Total items:', filteredItems.length); // Debug log
        // console.log('Items per page:', this.itemsPerPage); // Debug log
        // console.log('Total pages:', this.totalPages); // Debug log

        // If current page is beyond total pages, reset to last page
        if (this.currentPage > this.totalPages) {
            this.currentPage = Math.max(1, this.totalPages);
        }
    }

    getCurrentPageItems(): Blog[] {
        let items = this.blogItems;
        if (this.selectedCategory) {
            items = items.filter(item => item.blogCategory?.name === this.selectedCategory);
        }

        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageItems = items.slice(startIndex, endIndex);
        //console.log('Current page items:', pageItems.length); // Debug log
        return pageItems;
    }

    goToPage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
        }
    }

    nextPage(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }

    getPageNumbers(): number[] {
        const pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        // console.log('Page numbers:', pages); // Debug log
        return pages;
    }

    navigateToBlogPost(id: number): void {
        this.router.navigate(['/blog-post'], { queryParams: { id: id } });
    }
} 