import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatTableModule
} from '@angular/material';
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
    DraggableDirective
  ]
})
export class SharedModule { }
