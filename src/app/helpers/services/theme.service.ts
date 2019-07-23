import { Injectable, EventEmitter } from '@angular/core';
import { theme } from './../../classModel/themes';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeWrapper = document.querySelector('body');
  public themeChange = new EventEmitter<any>();
  constructor() {
  }
  underGoChartThemeChange(themeColor, chart) {
    // debugger;
    const c = chart;
    if (chart) {
      try {
        if (chart.chart.backgroundColor) {
          chart.chart.backgroundColor = theme[themeColor].bgColor;
        } else {
          // console.log('no background');
        }
        chart.xAxis.lineColor = theme[themeColor].textColor;
        chart.xAxis.title.style.color = theme[themeColor].textColor;
        chart.xAxis.labels.style.color = theme[themeColor].textColor;
        // Y Axis
        if (chart.yAxis.length > 0) {
          chart.yAxis[0].labels.style.color = theme[themeColor].textColor;
          chart.yAxis[0].title.style.color = theme[themeColor].textColor;
          chart.yAxis[1].labels.style.color = theme[themeColor].textColor;
          chart.yAxis[1].title.style.color = theme[themeColor].textColor;
          chart.yAxis[0].gridLineColor = theme[themeColor].textColor;
          chart.yAxis[0].lineColor = theme[themeColor].textColor;
        } else {
          chart.yAxis.labels.style.color = theme[themeColor].textColor;
          chart.yAxis.title.style.color = theme[themeColor].textColor;
          chart.yAxisgridLineColor = theme[themeColor].textColor;
          chart.yAxislineColor = theme[themeColor].textColor;
          chart.yAxis.gridLineColor = theme[themeColor].textColor;
          chart.yAxis.lineColor = theme[themeColor].textColor;
        }
        // legend
        // chart.legend.itemHoverStyle.color = theme[themeColor].textColor;
        // chart.legend.itemStyle.color = theme[themeColor].textColor;
        if (chart.colorAxis) {
          chart.colorAxis.labels.style.color = theme[themeColor].textColor;
        }
        if (chart.legend) {
          chart.legend.itemHoverStyle.color = theme[themeColor].textColor;
          chart.legend.itemStyle.color = theme[themeColor].textColor;
        }
        if (chart.plotOptions) {
          if (chart.plotOptions.column) {
            if (chart.plotOptions.column.dataLabels.color) {
              chart.plotOptions.column.dataLabels.color = theme[themeColor].textColor;
            }
          }
        }
        return chart;
      } catch (e) {
        console.log('Theme Change errored In Charts Returning Unmodified');
        console.log(e.stack);
        return c;
      }
    }
  }
  changeTheme(themeClass) {
    this.themeWrapper.style.setProperty('--bg-color', theme[themeClass].bgColor);
    this.themeWrapper.style.setProperty('--fore-color', theme[themeClass].foreColor);
    this.themeWrapper.style.setProperty('--text-color', theme[themeClass].textColor);
    this.themeWrapper.style.setProperty('--hover-color', theme[themeClass].hoverColor);
    this.themeWrapper.style.setProperty('--secondary-text-color', theme[themeClass].secondaryTextColor);
    this.themeWrapper.style.setProperty('--secondary-hover-color', theme[themeClass].secondaryHoverColor);
    this.themeWrapper.className = '';
    this.themeWrapper.className = themeClass;
  }
}
