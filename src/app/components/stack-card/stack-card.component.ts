import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular, faGitlab, faJs, faNode, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { getIconByName } from '../../helper/icon.helper';

@Component({
  selector: 'app-stack-card',
  templateUrl: './stack-card.component.html',
  styleUrls: ['./stack-card.component.scss'],
})
export class StackCardComponent implements OnChanges {
  @Input() brand: string;
  @Input() url: string = '/projects';

  icon: string[];

  constructor(library: FaIconLibrary, private router: Router) {
    library.addIcons(faAngular, faJs, faQuestion, faReact, faSass, faNodeJs, faNode, faGitlab);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.brand) {
      this.icon = getIconByName(this.brand);
    }
  }

  redirect(): void {
    if (this.url) {
      this.router.navigateByUrl(this.url);
    }
  }
}
