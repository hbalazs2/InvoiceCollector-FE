import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InvoicesComponent } from './rest/invoices/invoices.component';
import { InvoiceComponent } from './rest/invoice/invoice.component';
import { FormsModule } from '@angular/forms';
import { PartnersComponent } from './rest/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    InvoicesComponent,
    InvoiceComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
