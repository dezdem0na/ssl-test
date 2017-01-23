import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { DescriptionComponent } from './description.components';
import { CutExtra } from './cut.extra';
import { MinCostComponent } from "./min.cost.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, DescriptionComponent, MinCostComponent, CutExtra ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
