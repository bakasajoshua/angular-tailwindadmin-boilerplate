import { Component } from '@angular/core';
import { AccountToogleComponent } from "../account-toogle/account-toogle.component";

@Component({
  selector: 'app-sidebar',
  imports: [AccountToogleComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
