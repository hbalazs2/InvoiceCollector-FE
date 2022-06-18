import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from './invoice';
 
type invoice = {
  count: number;
  invoices: Invoice[];
};

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  private apiUrl = "http://localhost:8080/invoices";
  private apiUrlIdBase = "http://localhost:8080/invoice?id=";
  private apiUrlBase = "http://localhost:8080/invoice";

  constructor(private http: HttpClient) { }

  getInvoices() {
    // console.log("APIurl" + this.http.get<invoice>(this.apiUrl));
    return this.http.get<invoice>(this.apiUrl);
  }

  getInvoice(id : String) {
    let apiUrlId = this.apiUrlBase + "?id=" + id;
    // console.log(this.http.get<Invoice>(apiUrlId));
    return this.http.get<Invoice[]>(apiUrlId);
  }

  getInvoicesBetweenDatesByCompletionDate(start : string, end : string) {
    let apiUrlDate = this.apiUrlBase + "Cod?startCompDate=" + start + "&endCompDate=" + end;
    return this.http.get<invoice>(apiUrlDate);
  }

  getInvoicesByAll(id : string, startCreationDate : string, endCreationDate : string, startCompDate : string, endCompDate : string, startDeadlineDate : string, endDeadlineDate : string, minLimit : number, maxLimit : number, isIncoming : boolean, isOutgoing : boolean, partnerName : string, categoryName : string) {
    console.log(partnerName);
    console.log(categoryName);
    let apiUrlDate = this.apiUrlBase + "ByAll?id=" + id + "&startCreationDate=" + startCreationDate + "&endCreationDate=" + endCreationDate + "&startCompDate=" + startCompDate + "&endCompDate=" + endCompDate + "&startDeadlineDate=" + startDeadlineDate + "&endDeadlineDate=" + endDeadlineDate + "&minLimit=" + minLimit + "&maxLimit=" + maxLimit + "&isIncoming=" + isIncoming + "&isOutgoing=" + isOutgoing + "&partnerName=" + partnerName + "&categoryName=" + categoryName;
    console.log(apiUrlDate);
    return this.http.get<invoice>(apiUrlDate);
  }
}
