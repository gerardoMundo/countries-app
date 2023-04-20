import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './pages/capital/capital.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: CapitalComponent,
  },
  {
    path: 'by-countries',
    component: CapitalComponent,
  },
  {
    path: 'by-region',
    component: CapitalComponent,
  },
  {
    path: 'countrie/:id',
    component: CapitalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
