import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SliderComponent } from './components/slider/slider.component';
import { ButtonComponent } from './components/button/button.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavComponent,
    SliderComponent,
    ButtonComponent,
    RadiobuttonComponent,
    ToolbarComponent,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
