import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { SatyaComponent } from './component/satya/satya.component';
import { NextComponent } from './component/next/next.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ParentComponent,
    ChildComponent,
    SatyaComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
