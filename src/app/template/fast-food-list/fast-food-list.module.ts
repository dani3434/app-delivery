import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastFoodListPageRoutingModule } from './fast-food-list-routing.module';

import { FastFoodListPage } from './fast-food-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastFoodListPageRoutingModule
  ],
  declarations: [FastFoodListPage]
})
export class FastFoodListPageModule {}
