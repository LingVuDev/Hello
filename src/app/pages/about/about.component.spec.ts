import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('ProjectsComponent', () => {
  let component: AboutComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutComponent],
    });

    component = TestBed.inject(AboutComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
