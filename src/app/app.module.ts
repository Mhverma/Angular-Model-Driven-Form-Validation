import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModelFormComponent } from './model-form/model-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, ModelFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
