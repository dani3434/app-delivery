import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritoMenuPageRoutingModule } from './favorito-menu-routing.module';

import { FavoritoMenuPage } from './favorito-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritoMenuPageRoutingModule
  ],
  declarations: [FavoritoMenuPage]
})
export class FavoritoMenuPageModule {}
