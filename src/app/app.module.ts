import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MarkerDetailsComponent } from './marker-details/marker-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkerDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3Cr0c6G7FDybQqh4QJQ8mXukeALu9QBI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
