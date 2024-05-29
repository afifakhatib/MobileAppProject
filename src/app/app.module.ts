import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Mobilecomponent } from './shared/components/mobile/mobile.component';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './shared/components/header/header.component';
import { TabComponent } from './shared/components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    Mobilecomponent,
    HeaderComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class ListOverviewExample {}