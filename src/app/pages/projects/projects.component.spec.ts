import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsComponent],
    });

    component = TestBed.inject(ProjectsComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
