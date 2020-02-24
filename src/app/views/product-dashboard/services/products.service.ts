import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  //private suppliersUrl = this.supplierService.suppliersUrl;

 private productSelectedSubject = new BehaviorSubject<number>(0);
 productSelectedAction$ = this.productSelectedSubject.asObservable();
 
  constructor(private http: HttpClient) { }
}
