import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ width: '*', opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ width: '*', opacity: 1 }),
            animate('1s ease-in', 
                    style({ width: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  
  activeLink = this.links[0];
  
  isRootUrl = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isRootUrl = event.url === '/';
      });
  }

  close() {
    this.router.navigateByUrl('/');
  }
}
