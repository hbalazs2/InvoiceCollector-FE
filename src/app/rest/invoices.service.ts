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

  constructor(private http: HttpClient) { }

  getInvoices() {
    // console.log("APIurl" + this.http.get<invoice>(this.apiUrl));
    return this.http.get<invoice>(this.apiUrl);
  }

  getInvoice(id : String) {
    let apiUrlId = this.apiUrlIdBase + id;
    // console.log(this.http.get<Invoice>(apiUrlId));
    return this.http.get<Invoice>(apiUrlId);
  }
}
