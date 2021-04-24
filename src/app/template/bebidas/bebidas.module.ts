import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BebidasPageRoutingModule } from './bebidas-routing.module';

import { BebidasPage } from './bebidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BebidasPageRoutingModule
  ],
  declarations: [BebidasPage]
})
export class BebidasPageModule {}
