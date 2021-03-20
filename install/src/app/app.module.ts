import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Custom modules
    FormsModule, 
    ReactiveFormsModule,
   
    AppRoutingModule,
    LayoutModule,
  ],
  declarations: [
    AppComponent,
    //LayoutModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
