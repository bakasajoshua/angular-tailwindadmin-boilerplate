import { Component } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts/core';

@Component({
  selector: 'app-activity-graph',
  imports: [NgxEchartsDirective],
  templateUrl: './activity-graph.component.html',
  styleUrl: './activity-graph.component.css',
})



export class ActivityGraphComponent {
  chartOption: EChartsCoreOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      tooltip: {
        show: true,
      },
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      },{
        data: [800, 920, 801, 1034, 1390, 1030, 1220],
        type: 'line',
        smooth: true
      }
    ],
  };
}
