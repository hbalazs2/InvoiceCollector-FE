import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partner } from '../partner';
import { PartnersService } from '../partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  listOfPartners : Partner[] = [];

  constructor(private servPartners : PartnersService, private router : Router) {
    this.servPartners.getPartners().subscribe(partners => this.listOfPartners = partners.partners)
   }

  ngOnInit(): void {
  }

  showInvoicesByPartner(id : string) {
    this.router.navigate(
    ['invoiceByPartnerId'],
    { queryParams: {id : id}}
    );

  }


}
