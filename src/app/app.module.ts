import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnitListComponent } from './army/unit-list/unit-list.component';
import { UnitCardComponent } from './army/unit-card/unit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitListComponent,
    UnitCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
