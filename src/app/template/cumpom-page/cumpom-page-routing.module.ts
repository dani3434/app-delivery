import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CumpomPagePage } from './cumpom-page.page';

const routes: Routes = [
  {
    path: '',
    component: CumpomPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CumpomPagePageRoutingModule {}
