import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent
      ],
    });

    app = TestBed.inject(AppComponent);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
