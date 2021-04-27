import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastFoodListPage } from './fast-food-list.page';

const routes: Routes = [
  {
    path: '',
    component: FastFoodListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastFoodListPageRoutingModule {}
