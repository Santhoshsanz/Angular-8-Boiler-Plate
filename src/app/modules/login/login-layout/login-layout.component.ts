import { theme } from './../../../classModel/themes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {

  private themeWrapper = document.querySelector('body');
  constructor( ) {
    this.themeWrapper.style.setProperty('--bg-color', theme.calmicRed.bgColor);
    this.themeWrapper.style.setProperty('--fore-color', theme.calmicRed.foreColor);
    this.themeWrapper.style.setProperty('--text-color', theme.calmicRed.textColor);
    this.themeWrapper.style.setProperty('--hover-color', theme.calmicRed.hoverColor);
    this.themeWrapper.style.setProperty('--secondary-text-color', theme.calmicRed.secondaryTextColor);
    this.themeWrapper.style.setProperty('--secondary-hover-color', theme.calmicRed.secondaryHoverColor);
    this.themeWrapper.className = '';
    this.themeWrapper.className = 'calmicRed';
   }

  ngOnInit() {
  }

}
