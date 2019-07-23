import { theme } from './classModel/themes';
import { ThemeService } from './helpers/services/theme.service';
import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iop-v2';
  env = environment.url.siteUrl;
  themes = ['dark', 'calmic', 'light'];
  private themeWrapper = document.querySelector('body');
  constructor(private _themeService: ThemeService,
    private _translationService: TranslateService) {
    // Set Default Theme
    this.themeWrapper.style.setProperty('--bg-color', theme.dark.bgColor);
    this.themeWrapper.style.setProperty('--fore-color', theme.dark.foreColor);
    this.themeWrapper.style.setProperty('--text-color', theme.dark.textColor);
    this.themeWrapper.style.setProperty('--hover-color', theme.dark.hoverColor);
    this.themeWrapper.style.setProperty('--secondary-text-color', theme.dark.secondaryTextColor);
    this.themeWrapper.style.setProperty('--secondary-hover-color', theme.dark.secondaryHoverColor);
    this._translationService.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'en') {
        this._translationService.setTranslation('en', { "Hello": "Hello" });
      } else {
        this._translationService.setTranslation('jp', { "Hello": "こんにちは" });
      }
    })
  }
}
