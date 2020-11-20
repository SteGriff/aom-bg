import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnitListComponent } from './army/unit-list/unit-list.component';
import { UnitCardComponent } from './army/unit-card/unit-card.component';
import { CubeComponent } from './common/cube/cube.component';
import { UnitDialogComponent } from './army/unit-dialog/unit-dialog.component';
import { UnitCardContentComponent } from './army/unit-card-content/unit-card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitListComponent,
    UnitCardComponent,
    CubeComponent,
    UnitDialogComponent,
    UnitCardContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
