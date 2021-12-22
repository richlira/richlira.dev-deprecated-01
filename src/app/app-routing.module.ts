import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { HolabananaComponent } from './holabanana/holabanana.component';


const routes: Routes = [
  {
    path: "",
    component: BioComponent,
  },
  {
    path: "holabanana",
    component: HolabananaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
