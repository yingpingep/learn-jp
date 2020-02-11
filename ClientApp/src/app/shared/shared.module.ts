import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { nsProvider } from '../services/notify.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    DragDropModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [
    nsProvider
  ]
})
export class SharedModule { }
