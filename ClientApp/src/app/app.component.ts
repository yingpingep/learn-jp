import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface ISetIcon {
  canOpen: () => void;
  canClose: () => void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private ADD_ICON = 'playlist_add_check';
  private SETTING_ICON = 'settings_applications';
  private CLOSE = 'close';

  starBtnName = this.ADD_ICON;
  settingBtnName = this.SETTING_ICON;

  constructor(private router: Router) {
  }

  onStarClick(isActive: boolean) {
    this.onFuncBtnClick(
      isActive,
      {
        canOpen: () => this.starBtnName = this.ADD_ICON,
        canClose: () => this.starBtnName = this.CLOSE
      });
  }

  onSettingClick(isActive: boolean) {
    this.onFuncBtnClick(
      isActive,
      {
        canOpen: () => this.settingBtnName = this.SETTING_ICON,
        canClose: () => this.settingBtnName = this.CLOSE
      });
  }

  onFuncBtnClick(isActive: boolean, setIcon: ISetIcon) {
    if (!isActive) {
      setIcon.canClose();
    } else {
      setIcon.canOpen();
      this.router.navigateByUrl('/');
    }
  }
}
