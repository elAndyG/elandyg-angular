import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { ExperienceComponent } from './work-history/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkHistoryComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
