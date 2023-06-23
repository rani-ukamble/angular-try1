import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { A1Component } from './acom/a1/a1.component';
import { FormsModule } from '@angular/forms';
import { ArrAddComponent } from './arr-add/arr-add.component';
import { FormComponent } from './form/form.component';
import { FtryComponent } from './ftry/ftry.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    A1Component,
    ArrAddComponent,
    FormComponent,
    FtryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
