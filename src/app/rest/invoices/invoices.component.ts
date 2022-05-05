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
  invoicesByComplDate: Invoice[] = [];

  constructor(private servInvoices: InvoicesService, private router: Router) {
    this.servInvoices.getInvoices().subscribe(invoices => this.listInvoices = invoices.invoices);
  }

  ngOnInit(): void {
  }

  showInvoice(id : string) {
    console.log("ID: " + id)
    this.router.navigate(
      ['invoice'], 
      { queryParams: { id: id}}
    );
  }

  testItNow(start : string) {
    console.log(start);
    let startDate = new Date(start).toISOString().slice(0, 10);
    // startDate.getDate;
    console.log(startDate);
  }

  getInvoicesBetweenDatesByCDate(start : string, end : string) {
    // let invoicesByComplDate;
    this.servInvoices.getInvoicesBetweenDatesByCompletionDate(start, end).subscribe(invoicesByDate => {
      this.invoicesByComplDate = invoicesByDate.invoices;
      this.fillTheTable(this.invoicesByComplDate);
    });
    
    // console.log(this.invoicesByComplDate);
  }

  fillTheTable(listOfInvoices : Invoice[]) {
    this.listInvoices = listOfInvoices;
  }
  
  filterName1!:string;
  filterName2!:string;
  resetTable() {
    this.servInvoices.getInvoices().subscribe(invoices => this.listInvoices = invoices.invoices);
    this.filterName1 = '';
    this.filterName2 = '';
  }
}