import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partner } from './partner';

type partner = {
  count : number;
  partners: Partner[];
}

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  private apiUrlPartners = "http://localhost:8080/partners"

  constructor(private http: HttpClient) { }

  getPartners() {
    return this.http.get<partner>(this.apiUrlPartners);
  }
}
