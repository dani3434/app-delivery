import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjudaMenuPage } from './ajuda-menu.page';

const routes: Routes = [
  {
    path: '',
    component: AjudaMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjudaMenuPageRoutingModule {}
