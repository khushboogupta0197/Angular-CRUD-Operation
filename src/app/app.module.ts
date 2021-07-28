import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplyoeeModule } from './emplyoee/emplyoee.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    EmplyoeeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
