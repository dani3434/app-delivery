import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnderecoMenuPage } from './endereco-menu.page';

const routes: Routes = [
  {
    path: '',
    component: EnderecoMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoMenuPageRoutingModule {}
