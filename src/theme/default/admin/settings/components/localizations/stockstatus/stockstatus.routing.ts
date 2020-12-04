import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { StockStatusAddComponent } from './add/add.component';
import { StockStatusListComponent } from './list/list.component';

const stockStatusRoutes: Routes = [
  // { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '', component: StockStatusListComponent },
  { path: 'add', component: StockStatusAddComponent },
  {
    path: 'edit/:id',
    component: StockStatusListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(stockStatusRoutes)],
  exports: [RouterModule],
})
export class StockStatusRoutingModule {}
