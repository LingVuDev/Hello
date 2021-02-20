import { TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card.component';

describe('ProjectsComponent', () => {
  let component: ProjectCardComponent;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ProjectCardComponent ]
    })

    component = TestBed.inject(ProjectCardComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
