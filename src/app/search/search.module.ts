import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared/shared.module';
import { RepositoryComponent } from '../shared/repository/repository.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [SearchComponent, SearchDetailsComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class SearchModule { }
