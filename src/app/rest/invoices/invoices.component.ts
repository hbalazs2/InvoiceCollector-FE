import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoicesService } from '../invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  listInvoices: Invoice[] = [];
  invoicesByAll: Invoice[] = [];
  isHidden: boolean = true;

  constructor(private servInvoices: InvoicesService, private router: Router) {
    this.servInvoices.getInvoices().subscribe(invoices => this.listInvoices = invoices.invoices);
  }

  ngOnInit(): void {
  }

  showInvoice(id : string) {
    this.router.navigate(
      ['invoice'], 
      { queryParams: { id: id}}
    );
  }

  getInvoicesByAll(id : string, startCreationDate : string, endCreationDate : string, startCompDate : string, endCompDate : string, startDeadlineDate : string, endDeadlineDate : string, minLimitStr : string, maxLimitStr : string, isIncoming : boolean, isOutgoing : boolean, partnerName : string, categoryName : string) {
    var minLimit = Number(minLimitStr);
    var maxLimit = Number(maxLimitStr);
    this.servInvoices.getInvoicesByAll(id, startCreationDate, endCreationDate, startCompDate,
      endCompDate, startDeadlineDate, endDeadlineDate, minLimit, maxLimit, isIncoming, isOutgoing,
      partnerName, categoryName).subscribe(invoicesGetAll => {
      this.invoicesByAll = invoicesGetAll.invoices;
      console.log("inv comp: " + this.invoicesByAll);
      this.fillTheTable(this.invoicesByAll);
    });
  }

  fillTheTable(listOfInvoices : Invoice[]) {
    this.listInvoices = listOfInvoices;
  }

  resetTable() {
    this.servInvoices.getInvoices().subscribe(invoices => this.listInvoices = invoices.invoices);
  }

  setFilterVisibility() {
    // this.isHidden == false ? true : false;
    if (this.isHidden == false) {
      this.isHidden = true;
    }
    else {
      this.isHidden = false;
    }
  }
}