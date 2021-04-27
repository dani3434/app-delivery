import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoPedidosPage } from './historico-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoPedidosPageRoutingModule {}
