import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMagnizoomModule } from 'ng-magnizoom';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgMagnizoomModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
