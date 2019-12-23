import {
  Directive,
  ElementRef,
  AfterViewInit,
  HostBinding,
  HostListener
} from '@angular/core';

import { NotifyService, NotifyServiceFix } from './notify.service';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements AfterViewInit {
  originLeft: number;
  originTop: number;

  @HostBinding('style.left') hostLeft: string;
  @HostBinding('style.top') hostTop: string;

  @HostListener('pan', ['$event']) onPan = this.followDrag;
  @HostListener('panend', ['$event']) onPanend = this.backToOriginPosition;
  @HostListener('window:resize', ['$event']) onResize = this.resetOriginPosition;

  constructor(
    private host: ElementRef,
    private notifyService: NotifyService
  ) { }

  ngAfterViewInit(): void {
    this.resetOriginPosition();
  }

  followDrag(event: any): void {
    const tempLeft = this.originLeft + event.deltaX;
    const tempTop = this.originTop + event.deltaY;
    this.hostLeft = tempLeft + 'px';
    this.hostTop = tempTop + 'px';
  }

  backToOriginPosition(event: any): void {
    this.hostLeft = this.originLeft + 'px';
    this.hostTop = this.originTop + 'px';

    const hypoteinousa = Math.sqrt(Math.pow(event.deltaX, 2) + Math.pow(event.deltaY, 2));
    if (hypoteinousa > 150) {
      this.notifyService.shiftNotification.next('drop');
    }
  }

  resetOriginPosition(): void {
    this.originLeft = this.host.nativeElement.offsetLeft;
    this.originTop = this.host.nativeElement.offsetTop;
    this.hostLeft = undefined;
    this.hostTop = undefined;
  }
}
