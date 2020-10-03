import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoverComponent } from './pages/cover/cover.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './pages/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StackCardComponent } from './components/stack-card/stack-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    AboutComponent,
    StackCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
