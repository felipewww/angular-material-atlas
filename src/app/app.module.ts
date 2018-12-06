import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProfitsComponent } from './profits/profits.component';
import { TitleComponent } from './title/title.component';
import { CardContentComponent } from './card-content/card-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProfitsComponent,
    TitleComponent,
    CardContentComponent,
    SidenavComponent,
    FooterComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
