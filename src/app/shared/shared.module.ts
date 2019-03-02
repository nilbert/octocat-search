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
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';

import {MatTooltipModule} from '@angular/material/tooltip';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [RepositoryComponent, RepositoryDetailsComponent,FooterComponent],
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
    RepositoryComponent,
    RepositoryDetailsComponent,
    FlexLayoutModule,
    FooterComponent,
    MatTooltipModule
  ],
})
export class SharedModule { }
