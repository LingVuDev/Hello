import { Component, OnInit } from '@angular/core';
import { projects } from '../../projects';
import * as _ from 'lodash';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  availableFilter: string[];

  projects: Project[];

  selectedFilter: string[];
  selectedSort;

  constructor() {}

  ngOnInit(): void {
    this.projects = [...projects];

    this.availableFilter = _.uniq(
      this.projects.reduce<string[]>((tags, project) => {
        return [...tags, ...project.tags];
      }, []),
      true
    );
  }

  update() {
    this.projects = [...projects].filter((project) =>
      this.selectedFilter.some((filter) => project.tags.includes(filter)) || this.selectedFilter.length === 0 
    );
  }
}
