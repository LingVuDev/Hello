import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit {
  currentUrl: string;

  links: Link[] = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Projects',
      url: '/projects',
    },
    {
      title: 'About',
      url: '/about',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;
    });
  }

  navigate(link: Link) {
    this.router.navigateByUrl(link.url);
  }
}
