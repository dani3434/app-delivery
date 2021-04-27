import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChurrascoListPage } from './churrasco-list.page';

const routes: Routes = [
  {
    path: '',
    component: ChurrascoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChurrascoListPageRoutingModule {}
