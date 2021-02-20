import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { createSpyFromClass } from 'jasmine-auto-spies';

import { CoverComponent } from './cover.component';

describe('ProjectsComponent', () => {
  let component: CoverComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoverComponent, { provide: Router, useValue: createSpyFromClass(Router) }],
    });

    component = TestBed.inject(CoverComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
