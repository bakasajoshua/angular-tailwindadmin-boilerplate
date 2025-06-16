import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar/sidebar.component';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';

import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart, PieChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([PieChart, LineChart, GridComponent, CanvasRenderer]);

@Component({
  selector: 'app-app-main',
  imports: [SidebarComponent, PageLayoutComponent],
  templateUrl: './app-main.component.html',
  styleUrl: './app-main.component.css',
  providers: [
      provideEchartsCore({ echarts }),
    ],
})
export class AppMainComponent {

}
