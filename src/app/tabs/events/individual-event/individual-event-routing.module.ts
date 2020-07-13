import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualEventPage } from './individual-event.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualEventPageRoutingModule {}
