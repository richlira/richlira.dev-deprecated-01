import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolabananaComponent } from './holabanana/holabanana.component';
import { BioComponent } from './bio/bio.component';
import { HolabananaprivacypolicyComponent } from './holabananaprivacypolicy/holabananaprivacypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    HolabananaComponent,
    BioComponent,
    HolabananaprivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
