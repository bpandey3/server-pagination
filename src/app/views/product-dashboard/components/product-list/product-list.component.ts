import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, EMPTY } from 'rxjs';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {

  pageTitle = 'Product List';
  errorMessage = '';
  categories;
  sub: Subscription;
  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private productService: ProductService) { }

  // ngOnInit(): void {
  //   this.products$ = this.productService.getProducts().pipe(catchError(err => {
  //     this.errorMessage = err;
  //     console.log(this.errorMessage);
  //     return EMPTY;
  //   }
  //   ));
  // }

  // products$ =combineLatest([this.productService.product$,this.action$])
  // .pipe(map(([products,category])=>
  // products.filter(x=>x.categoryId===category)
  // ));

diff(){
  // var obsScan = Observable.from([1,2,3,4,5,6]);
}

// products$ = this.productService.product$.pipe(catchError(err => {
//   this.errorMessageSubject.next(err);
//       return EMPTY;
//    }));
   
  // products$ = combineLatest([
  //   this.productService.product$,
  //   this.categorySelectedAction$
  // ])
  //   .pipe(
  //     map(([products, selectedCategoryId]) =>
  //       products.filter(product =>
  //         selectedCategoryId ? product.categoryId === 5 : true
  //       )),
  //     catchError(err => {
  //       this.errorMessageSubject.next(err);
  //       return EMPTY;
  //     })
  //   );

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId);
  }



}
