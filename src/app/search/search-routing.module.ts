import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

const routes: Routes = [
  {
    path: '', component: SearchComponent, pathMatch: 'full'},
   { path: 'details', component: SearchDetailsComponent, pathMatch: 'full'},
   { path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
