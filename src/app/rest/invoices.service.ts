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
  private apiUrlBase = "http://localhost:8080/invoice";

  constructor(private http: HttpClient) { }

  getInvoices() {
    return this.http.get<invoice>(this.apiUrl);
  }

  getInvoice(id : String) {
    let apiUrlId = this.apiUrlBase + "?id=" + id;
    return this.http.get<Invoice[]>(apiUrlId);
  }

  getInvoicesByAll(id : string, startCreationDate : string, endCreationDate : string, startCompDate : string, endCompDate : string, startDeadlineDate : string, endDeadlineDate : string, minLimit : number, maxLimit : number, isIncoming : boolean, isOutgoing : boolean, partnerName : string, categoryName : string) {
    let apiUrlDate = this.apiUrlBase + "ByAll?id=" + id + "&startCreationDate=" + startCreationDate + "&endCreationDate=" + endCreationDate + "&startCompDate=" + startCompDate + "&endCompDate=" + endCompDate + "&startDeadlineDate=" + startDeadlineDate + "&endDeadlineDate=" + endDeadlineDate + "&minLimit=" + minLimit + "&maxLimit=" + maxLimit + "&isIncoming=" + isIncoming + "&isOutgoing=" + isOutgoing + "&partnerName=" + partnerName + "&categoryName=" + categoryName;
    return this.http.get<invoice>(apiUrlDate);
  }
}
