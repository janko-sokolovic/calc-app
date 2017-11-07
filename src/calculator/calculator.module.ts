import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorComponent } from './calculator.component';
import { KeyComponent } from './key/key.component';

@NgModule({
  declarations: [
    CalculatorComponent, KeyComponent
  ],
  imports: [BrowserModule],
  providers: [],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
