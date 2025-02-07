import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnitListComponent } from './army/unit-list/unit-list.component';
import { UnitCardComponent } from './army/unit-card/unit-card.component';
import { CubeComponent } from './common/cube/cube.component';
import { UnitCardContentComponent } from './army/unit-card-content/unit-card-content.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { UnitViewComponent } from './army/unit-view/unit-view.component';
import { UnitService } from 'app/army/unit.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpponentListComponent } from './army/opponent-list/opponent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitListComponent,
    UnitCardComponent,
    CubeComponent,
    UnitCardContentComponent,
    HomeComponent,
    UnitViewComponent,
    OpponentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UnitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
