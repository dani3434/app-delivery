import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChurrascoListPageRoutingModule } from './churrasco-list-routing.module';

import { ChurrascoListPage } from './churrasco-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChurrascoListPageRoutingModule
  ],
  declarations: [ChurrascoListPage]
})
export class ChurrascoListPageModule {}
