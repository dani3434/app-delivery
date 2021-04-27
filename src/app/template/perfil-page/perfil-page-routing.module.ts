import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPagePage } from './perfil-page.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPagePageRoutingModule {}
