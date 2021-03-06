import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCheckboxModule, MatRadioModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';


import { RepositoryComponent } from './repository/repository.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';

import {MatTooltipModule} from '@angular/material/tooltip';

import { RouterModule, Routes } from '@angular/router';
import { CommitComponent } from './commit/commit.component';


@NgModule({
  declarations: [RepositoryComponent, RepositoryDetailsComponent, FooterComponent, CommitComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatSelectModule,
    FlexLayoutModule,
    MatTooltipModule,
    RouterModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatSelectModule,
    RepositoryComponent,
    RepositoryDetailsComponent,
    FlexLayoutModule,
    FooterComponent,
    MatTooltipModule,
    CommitComponent
  ],
})
export class SharedModule { }
