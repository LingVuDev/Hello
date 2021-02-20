import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: Router, useValue: createSpyFromClass(Router)}
      ],
    });

    app = TestBed.inject(AppComponent);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
