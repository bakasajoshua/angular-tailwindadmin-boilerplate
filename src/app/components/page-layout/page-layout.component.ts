import { Component } from '@angular/core';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

@Component({
  selector: 'app-page-layout',
  imports: [TopBarComponent, DashboardComponent],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css'
})
export class PageLayoutComponent {

}
