import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Mobilecomponent } from './shared/components/mobile/mobile.component';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './shared/components/header/header.component';
import { Tab1Component} from './shared/components/tab1/tab1.component';
import { Tab2Component } from './shared/components/tab2/tab2.component';
import { Tab3component } from './shared/components/tab3/tab3.component';

@NgModule({
  declarations: [
    AppComponent,
    Mobilecomponent,
    HeaderComponent,
    Tab1Component,
    Tab2Component,
    Tab3component
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