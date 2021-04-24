import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BebidasPage } from './bebidas.page';

const routes: Routes = [
  {
    path: '',
    component: BebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BebidasPageRoutingModule {}
