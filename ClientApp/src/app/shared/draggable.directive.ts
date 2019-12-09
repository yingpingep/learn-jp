import {
  Directive,
  ElementRef,
  AfterViewInit,
  HostBinding,
  HostListener
} from '@angular/core';

import { NotifyService } from './notify.service';

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

  constructor(
    private host: ElementRef,
    private notifyService: NotifyService
  ) {}

  ngAfterViewInit(): void {
    this.originLeft = this.host.nativeElement.offsetLeft;
    this.originTop = this.host.nativeElement.offsetTop;
  }

  followDrag(event: any) {
    const tempLeft = this.originLeft + event.deltaX;
    const tempTop = this.originTop + event.deltaY;
    this.hostLeft = tempLeft + 'px';
    this.hostTop = tempTop + 'px';
  }

  backToOriginPosition(event: any) {
    this.hostLeft = this.originLeft + 'px';
    this.hostTop = this.originTop + 'px';

    const sqrt = Math.sqrt;
    const pow = Math.pow;
    if (sqrt(pow(event.deltaX, 2) + pow(event.deltaY, 2)) > 150) {
      this.notifyService.moveEndNotification.next('drop');
    }
  }
}
