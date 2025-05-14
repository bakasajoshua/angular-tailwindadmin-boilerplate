import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar/sidebar.component";
import { PageLayoutComponent } from "./components/page-layout/page-layout.component";

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, PageLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Tailwind Template';
}
