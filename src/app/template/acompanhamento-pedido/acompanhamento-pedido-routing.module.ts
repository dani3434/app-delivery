import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcompanhamentoPedidoPage } from './acompanhamento-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: AcompanhamentoPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcompanhamentoPedidoPageRoutingModule {}
