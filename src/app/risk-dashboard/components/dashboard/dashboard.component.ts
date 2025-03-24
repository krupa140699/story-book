import { Component } from '@angular/core';
import { AnnualExposureDetailsComponent } from "./components/annual-exposure-details/annual-exposure-details.component";
import { BreadcrumbWalletComponent } from './components/breadcrumb-wallet/breadcrumb-wallet.component';

@Component({
  selector: 'app-dashboard',
  imports: [AnnualExposureDetailsComponent, BreadcrumbWalletComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}