import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { StackCardComponent } from './stack-card.component';

describe('ProjectsComponent', () => {
  let component: StackCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StackCardComponent,
        { provide: Router, useValue: createSpyFromClass(Router) },
      ],
    });

    component = TestBed.inject(StackCardComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
