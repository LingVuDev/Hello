import { Component, OnInit } from '@angular/core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss']
})
export class IconBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    library.add(fab);
  }

}
