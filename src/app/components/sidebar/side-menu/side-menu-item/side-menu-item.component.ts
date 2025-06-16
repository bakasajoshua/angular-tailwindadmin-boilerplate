import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  featherHome,
  featherUsers,
  featherPaperclip,
  featherLink,
  featherDollarSign,
  featherLogIn } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-side-menu-item',
  imports: [NgIcon, RouterLink],
  providers: [provideIcons({
    featherHome,
    featherUsers,
    featherPaperclip,
    featherLink,
    featherDollarSign,
    featherLogIn
  })],
  templateUrl: './side-menu-item.component.html',
  styleUrl: './side-menu-item.component.css'
})
export class SideMenuItemComponent {
  @Input() icon: string = 'featherHome';
  @Input() ititle: string = '';
  @Input() route: string = '';
  @Input() selected: boolean = false;
}
