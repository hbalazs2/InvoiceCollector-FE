import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InvoicesComponent } from './rest/invoices/invoices.component';
import { InvoiceComponent } from './rest/invoice/invoice.component';
import { PartnersComponent } from './rest/partners/partners.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'invoices', component: InvoicesComponent},
  { path: 'invoice', component: InvoiceComponent},
  { path: 'newInvoice', component: InvoiceComponent},
  { path: 'partners', component: PartnersComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
