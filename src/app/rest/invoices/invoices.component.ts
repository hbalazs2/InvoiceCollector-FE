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

  constructor(private servInvoices: InvoicesService, private router: Router) {
    console.log("in the comp")
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
}
