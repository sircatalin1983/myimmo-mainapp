import { Component, OnInit } from '@angular/core';
import { BlogCategoryService } from '../../services/blog-category/blog-category.service';
import { BlogItemService } from '../../services/blog-item/blog-item.service';
import { BlogItem } from '../../services/blog-item/blog-item';
import { BlogCategory } from '../../services/blog-category/blog-category';

@Component({
    selector: 'app-footer-blog',
    templateUrl: './footer-blog.component.html',
    styleUrls: ['./footer-blog.component.scss']
})
export class FooterBlogComponent implements OnInit {
    categories: BlogCategory[] = [];
    blogItems: BlogItem[] = [];
    filteredBlogItems: BlogItem[] = [];
    selectedCategory: string | null = null;
    
    // Pagination
    currentPage: number = 1;
    itemsPerPage: number = 6;
    totalPages: number = 1;

    constructor(
        private blogCategoryService: BlogCategoryService,
        private blogItemService: BlogItemService
    ) { }

    ngOnInit(): void {
        this.loadCategories();
        this.loadBlogItems();
    }

    loadCategories(): void {
        this.blogCategoryService.getAll().subscribe(categories => {
            this.categories = categories;
        });
    }

    loadBlogItems(): void {
        this.blogItemService.getAll().subscribe(items => {
            this.blogItems = items;
            this.filterItems();
        });
    }

    filterItems(category: string | null = null): void {
        this.selectedCategory = category;
        this.currentPage = 1; // Reset to first page when filtering

        if (!category) {
            this.filteredBlogItems = [...this.blogItems];
        } else {
            this.filteredBlogItems = this.blogItems.filter(item => 
                item.category === category
            );
        }

        this.totalPages = Math.ceil(this.filteredBlogItems.length / this.itemsPerPage);
    }

    getCurrentPageItems(): BlogItem[] {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.filteredBlogItems.slice(startIndex, endIndex);
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

    isCategoryActive(category: string | null): boolean {
        return this.selectedCategory === category;
    }

    getPageNumbers(): number[] {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
} 