import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorComponent } from './calculator.component';
import { KeyComponent } from './key/key.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    CalculatorComponent, KeyComponent, DisplayComponent
  ],
  imports: [BrowserModule],
  providers: [],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
