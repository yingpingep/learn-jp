import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatTableModule
} from '@angular/material';
import { DraggableDirective } from './draggable.directive';
import { nsProvider } from './notify.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    DraggableDirective
  ],
  providers: [
    nsProvider
  ]
})
export class SharedModule { }
