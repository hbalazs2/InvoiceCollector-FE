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
  invoicesByAll: Invoice[] = [];

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

  getInvoicesBetweenDatesByComplDate(start : string, end : string) {
    // let invoicesByComplDate;
    this.servInvoices.getInvoicesBetweenDatesByCompletionDate(start, end).subscribe(invoicesByDate => {
      this.invoicesByComplDate = invoicesByDate.invoices;
      this.fillTheTable(this.invoicesByComplDate);
    });
    
    // console.log(this.invoicesByComplDate);
  }

  getInvoicesByAll(id : string, startCreationDate : string, endCreationDate : string, startCompDate : string, endCompDate : string, startDeadlineDate : string, endDeadlineDate : string, minLimitStr : string, maxLimitStr : string, isIncoming : boolean, isOutgoing : boolean, partnerName : string, categoryName : string) {
    // let invoicesByComplDate;
    var minLimit = Number(minLimitStr);
    var maxLimit = Number(maxLimitStr);
    console.log(isIncoming);
    console.log(isOutgoing);
    this.servInvoices.getInvoicesByAll(id, startCreationDate, endCreationDate, startCompDate,
      endCompDate, startDeadlineDate, endDeadlineDate, minLimit, maxLimit, isIncoming, isOutgoing,
      partnerName, categoryName).subscribe(invoicesGetAll => {
      this.invoicesByAll = invoicesGetAll.invoices;
      console.log("inv comp: " + this.invoicesByAll);
      this.fillTheTable(this.invoicesByAll);
    });
    
    // console.log(this.invoicesByComplDate);
  }

  fillTheTable(listOfInvoices : Invoice[]) {
    this.listInvoices = listOfInvoices;
  }
  
  // filterName1!:string;
  // filterName2!:string;
  // id!:string;
  // startCreationDate!:string;
  // endCreationDate!:string;
  // startCompDate!:string;
  // endCompDate!:string;
  // startDeadlineDate!:string;
  // endDeadlineDate!:string;
  // minLimit!:number;
  // maxLimit!:number;
  // partnerSelector!:string;
  // categorySelector!:string;

  resetTable() {
    this.servInvoices.getInvoices().subscribe(invoices => this.listInvoices = invoices.invoices);
    // this.filterName1 = '';
    // this.filterName2 = '';
  }

  isHidden:boolean = false;
  setFilterVisible() {
    if (this.isHidden == false) {
      this.isHidden = true;
    }
    else if (this.isHidden == true) {
      this.isHidden = false;
    }
    
  }
}