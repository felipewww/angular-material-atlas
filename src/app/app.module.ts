import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/default/toolbar/toolbar.component';
import { ProfitsComponent } from './components/profits/profits.component';
import { TitleComponent } from './components/default/title/title.component';
import { CardContentComponent } from './components/default/card-content/card-content.component';
import { SidenavComponent } from './components/default/sidenav/sidenav.component';
import { FooterComponent } from './components/default/footer/footer.component';
import { DatatableComponent } from './components/profits/datatable/datatable.component';
import {HttpModule} from '@angular/http';

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
    HttpModule,
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
