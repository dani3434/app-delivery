import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjudaMenuPageRoutingModule } from './ajuda-menu-routing.module';

import { AjudaMenuPage } from './ajuda-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjudaMenuPageRoutingModule
  ],
  declarations: [AjudaMenuPage]
})
export class AjudaMenuPageModule {}
