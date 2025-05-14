import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherChevronDown, featherChevronUp } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-account-toogle',
  imports: [NgIcon],
  providers: [provideIcons({ featherChevronDown, featherChevronUp })],
  standalone: true,
  templateUrl: './account-toogle.component.html',
  styleUrl: './account-toogle.component.css'
})
export class AccountToogleComponent {
  user: any = {
    name: "Joshua",
    email: "john@example.com"
  }
}
