import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPagePageRoutingModule } from './perfil-page-routing.module';

import { PerfilPagePage } from './perfil-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPagePageRoutingModule
  ],
  declarations: [PerfilPagePage]
})
export class PerfilPagePageModule {}
