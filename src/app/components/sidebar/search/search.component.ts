import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherCommand, featherSearch } from '@ng-icons/feather-icons';
import { CommandMenuComponent } from "../command-menu/command-menu.component";

@Component({
  selector: 'app-search',
  imports: [NgIcon, CommandMenuComponent],
  providers: [provideIcons({ featherCommand, featherSearch })],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  os: any = navigator.appVersion;
  is_mac : boolean = this.os.indexOf("Mac") != -1;
  
  search_text : string = "";
  is_command_menu_open : boolean = false;;
  onFocus(e: any) {
    e.target.blur();
  }
}
