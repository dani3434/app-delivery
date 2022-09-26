import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoMenuPageRoutingModule } from './endereco-menu-routing.module';

import { EnderecoMenuPage } from './endereco-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnderecoMenuPageRoutingModule
  ],
  declarations: [EnderecoMenuPage]
})
export class EnderecoMenuPageModule {}
