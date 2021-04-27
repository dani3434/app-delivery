import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HamburguerListPageRoutingModule } from './hamburguer-list-routing.module';

import { HamburguerListPage } from './hamburguer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamburguerListPageRoutingModule
  ],
  declarations: [HamburguerListPage]
})
export class HamburguerListPageModule {}
