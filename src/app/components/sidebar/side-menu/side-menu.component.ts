import { Component } from '@angular/core';
import { SideMenuItemComponent } from "./side-menu-item/side-menu-item.component";

@Component({
  selector: 'app-side-menu',
  imports: [SideMenuItemComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

}
