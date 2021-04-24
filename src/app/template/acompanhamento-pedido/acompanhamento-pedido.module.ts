import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcompanhamentoPedidoPageRoutingModule } from './acompanhamento-pedido-routing.module';

import { AcompanhamentoPedidoPage } from './acompanhamento-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcompanhamentoPedidoPageRoutingModule
  ],
  declarations: [AcompanhamentoPedidoPage]
})
export class AcompanhamentoPedidoPageModule {}
