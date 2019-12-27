import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';
import { nsProvider } from '../services/notify.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DraggableDirective } from './draggable.directive';

@NgModule({
  declarations: [
    DraggableDirective
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
