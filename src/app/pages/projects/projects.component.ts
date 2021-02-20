import { Component, OnInit } from '@angular/core';
import { projects } from '../../projects';
import * as _ from 'lodash';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  availableFilter: string[];

  projects: Project[];

  selectedFilter;
  selectedSort;

  constructor() { }

  ngOnInit(): void {
    this.projects = [...projects];

    this.availableFilter = _.uniq(this.projects.reduce<string[]>((tags, project) => {
      return [...tags, ...project.tags];
    }, []), true);
  }

}
