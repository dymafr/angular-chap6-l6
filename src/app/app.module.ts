import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ColorDirective } from "./color.directive";
import { IfDirective } from './if.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ColorDirective, IfDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
