import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  public href: string = "";
  
  readonly defaultLang = 'ro';
  languageList = [
    { code: 'ro', label: 'Română' },
    { code: 'en', label: 'English' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.href = environment.local;
  }

  ngOnDestroy(): void { }
}
