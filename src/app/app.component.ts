import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { SidebarComponent } from "./components/sidebar/sidebar/sidebar.component";
import { PageLayoutComponent } from "./components/page-layout/page-layout.component";


echarts.use([LineChart, GridComponent, CanvasRenderer]);

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, PageLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
      provideEchartsCore({ echarts }),
    ],
})
export class AppComponent {
  title = 'Angular Tailwind Template';
}
