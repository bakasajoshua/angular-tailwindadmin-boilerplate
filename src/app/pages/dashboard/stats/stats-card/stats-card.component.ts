import { Component, Input, ViewEncapsulation  } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherTrendingDown, featherTrendingUp } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-stats-card',
  imports: [NgIcon],
  providers: [provideIcons({ featherTrendingDown, featherTrendingUp })],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class StatsCardComponent {
  @Input() ctitle: string = "";
  @Input() cvalue: string = "";
  @Input() cpillText: string = "";
  @Input() ctrend: string = "";
  @Input() cperiod: string = "";
}
