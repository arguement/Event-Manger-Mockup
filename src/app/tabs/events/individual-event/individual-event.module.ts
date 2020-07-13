import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividualEventPageRoutingModule } from './individual-event-routing.module';

import { IndividualEventPage } from './individual-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualEventPageRoutingModule
  ],
  declarations: [IndividualEventPage]
})
export class IndividualEventPageModule {}
