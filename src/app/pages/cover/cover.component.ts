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

  contactLinks = {
    linkedin: 'https://www.linkedin.com/in/lingvu/',
    stackoverflow: 'https://stackoverflow.com/users/10114038/ling-vu?tab=profile',
    github: 'https://github.com/LingVuDev',
    email: 'mailto:vumanhling@icloud.com',
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;
    });
  }

  navigate(link: Link) {
    this.router.navigateByUrl(link.url);
  }

  open(url: string) {
    window.open(url,'_blank','noopener');
  }
}
