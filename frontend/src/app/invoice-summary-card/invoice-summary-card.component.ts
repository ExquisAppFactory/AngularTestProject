import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { saxCardOutline } from '@ng-icons/iconsax/outline';


@Component({
  selector: 'app-invoice-summary-card',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ saxCardOutline})],
  templateUrl: './invoice-summary-card.component.html',
  styleUrl: './invoice-summary-card.component.css'
})
export class InvoiceSummaryCardComponent {

}
