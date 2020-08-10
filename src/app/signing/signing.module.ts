import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigningComponent } from './signing.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [SigningComponent],
  exports: [SigningComponent]
})
export class SigningComponentModule {}
