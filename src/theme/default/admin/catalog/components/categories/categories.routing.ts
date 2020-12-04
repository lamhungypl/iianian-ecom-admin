import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { CategoryAddComponent } from './add/add.component';
import { CategoriesListComponent } from './list/list.component';

const categoriesRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CategoriesListComponent },
  { path: 'add', component: CategoryAddComponent },
  {
    path: 'edit/:id',
    component: CategoryAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(categoriesRoutes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
