import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoPedidosPageRoutingModule } from './historico-pedidos-routing.module';

import { HistoricoPedidosPage } from './historico-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoPedidosPageRoutingModule
  ],
  declarations: [HistoricoPedidosPage]
})
export class HistoricoPedidosPageModule {}
