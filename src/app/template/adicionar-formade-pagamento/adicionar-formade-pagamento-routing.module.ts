import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarFormadePagamentoPage } from './adicionar-formade-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarFormadePagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarFormadePagamentoPageRoutingModule {}
