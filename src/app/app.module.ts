import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CuboComponent } from './cubo/cubo.component';
import { CommonModule } from '@angular/common';
import { ExemplosComponent } from './exemplos/exemplos.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    CuboComponent,
    ExemplosComponent,
    AutoCompleteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
