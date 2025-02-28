// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   imports: [],
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.scss'
// })
// export class ProductsComponent {

// }
import { Component, inject, output } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { SupportFixComponent } from "../support-fix/support-fix.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';
import { CncRouterService } from '../servises/products/cnc-router.service';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, SupportFixComponent, FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


  change: boolean = true;
  changeCurency() {
    this.change = !this.change;
  }
  path: string = "all";
  remove($event: any) {
    this.cart = this.cart.filter(m => m != $event)
  }
  buy($event: any) {
    this.cart.push($event)
  }


  routerProducts = inject(CncRouterService)


  produts = this.routerProducts.cncRouterProducts;
  wallProducts = this.routerProducts.relief;


  cart: any[] = [];
}
