import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  constructor() {}

  ngOnInit(): void {}

  open(url: string) {
    window.open(url,'_blank','noopener');
  }
}
