import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaListPage } from './pizza-list.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaListPageRoutingModule {}
