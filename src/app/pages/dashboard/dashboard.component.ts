import { Component } from '@angular/core';
import { StatsCardComponent } from "./stats/stats-card/stats-card.component";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherUser, featherEye } from '@ng-icons/feather-icons';
import { ActivityGraphComponent } from "./activity-graph/activity-graph.component";
import { UsageGraphComponent } from './usage-graph/usage-graph.component';

@Component({
  selector: 'app-dashboard',
  imports: [StatsCardComponent, NgIcon, ActivityGraphComponent, UsageGraphComponent],
  providers: [provideIcons({ featherUser, featherEye })],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
