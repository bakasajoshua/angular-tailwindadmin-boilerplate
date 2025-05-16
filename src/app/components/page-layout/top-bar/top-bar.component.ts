import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherCalendar } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-top-bar',
  imports: [NgIcon],
  providers: [provideIcons({ featherCalendar })],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}
