import { Component } from '@angular/core';
import { AccountToogleComponent } from "../account-toogle/account-toogle.component";
import { SearchComponent } from "../search/search.component";
import { SideMenuComponent } from "../side-menu/side-menu.component";

@Component({
  selector: 'app-sidebar',
  imports: [AccountToogleComponent, SearchComponent, SideMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
