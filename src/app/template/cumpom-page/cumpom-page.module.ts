import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CumpomPagePageRoutingModule } from './cumpom-page-routing.module';

import { CumpomPagePage } from './cumpom-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CumpomPagePageRoutingModule
  ],
  declarations: [CumpomPagePage]
})
export class CumpomPagePageModule {}
