import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoicesService } from '../invoices.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceInfo! : Invoice; 

  constructor(private activeroute: ActivatedRoute, private servInvoices: InvoicesService) {
    let id = String(activeroute.snapshot.queryParamMap.get('id'));
    this.servInvoices.getInvoice(id).subscribe(invoice => {
      this.invoiceInfo = invoice;
    });
  }

  ngOnInit(): void {
  }

}
