import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceSummaryCardComponent } from './invoice-summary-card/invoice-summary-card.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  saxArrowRight1Outline,
  saxArrowLeftOutline,
} from '@ng-icons/iconsax/outline';
import { InvocieTableComponent } from './invocie-table/invocie-table.component';
import { DataItem, HeadCell } from '../utils/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideIcons({ saxArrowRight1Outline, saxArrowLeftOutline })],
  imports: [
    RouterOutlet,
    InvoiceSummaryCardComponent,
    NgIconComponent,
    InvocieTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';

  headCells: HeadCell[] = [
    {
      id: 'invoiceId',
      label: 'Invoice ID',
    },
    {
      id: 'amount',
      label: 'Amount',
    },
    {
      id: 'status',
      label: 'Status',
    },
    {
      id: 'subject',
      label: 'Subject',
    },
    {
      id: 'action',
      label: 'Action',
    },
  ];

  statusData: { color: string; statusText: string }[] = [
    {
      color: 'green',
      statusText: 'Paid',
    },
    {
      color: 'orange',
      statusText: 'Ongoing',
    },
    {
      color: 'red',
      statusText: 'Unpaid',
    },
  ];

  sampleData: DataItem[] = [
    {
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },
    {
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },{
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },{
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },{
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },{
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },{
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },{
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },{
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },{
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },{
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },
    {
      invoiceId: 'INV-001',
      amount: 123.45,
      status: 'Ongoing',
      subject: 'Payment for order #123',
      action: 'View Details',
    },
    {
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },
    {
      invoiceId: 'INV-002',
      amount: 987.65,
      status: 'Paid',
      subject: 'Invoice for service provided',
      action: 'Download',
    },
    {
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },
    {
      invoiceId: 'INV-003',
      amount: 543.21,
      status: 'Unpaid',
      subject: 'Reminder for unpaid invoice',
      action: 'Pay Now',
    },
    {
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },
    {
      invoiceId: 'INV-005',
      amount: 246.8,
      status: 'Unpaid',
      subject: 'Order cancelled',
      action: 'Refund',
    },
    {
      invoiceId: 'INV-004',
      amount: 789.01,
      status: 'Paid',
      subject: 'Invoice for product shipment',
      action: 'View Balance',
    },
  ];

  createData = (
    invoiceId: string,
    amount: string,
    status: string,
    subject: string,
    action: string
  ) => {
    return {
      invoiceId,
      amount,
      status,
      subject,
      action,
    };
  };

  formattedData: any[] = []



  ngOnInit(): void {
    this.formattedData = this.formatData();
  }

  formatData = () => {
    const formattedData = this.sampleData.map((data: any, index: number) => {
      const statusColor = this.statusData.find((status) => status.statusText === data.status)?.color  
      const statusTemplate = `
      <div class="flex flex-row items-center gap-2">
        <p class="text-${statusColor}-600">⦿</p>
        <p>${data.status}</p>
      </div>
    `  
      return this.createData(`#INV${index}${index + 2}${index + 1}`, data.amount, statusTemplate, data.subject, data.action);
    });
    return formattedData;
  };
  
}
