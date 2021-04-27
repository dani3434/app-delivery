import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarFormadePagamentoPageRoutingModule } from './adicionar-formade-pagamento-routing.module';

import { AdicionarFormadePagamentoPage } from './adicionar-formade-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarFormadePagamentoPageRoutingModule
  ],
  declarations: [AdicionarFormadePagamentoPage]
})
export class AdicionarFormadePagamentoPageModule {}
