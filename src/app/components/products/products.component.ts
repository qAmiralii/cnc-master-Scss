// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   imports: [],
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.scss'
// })
// export class ProductsComponent {

// }
import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { SupportFixComponent } from "../support-fix/support-fix.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-products',
  imports: [ProductComponent, SupportFixComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  path: string = "all";
  remove($event: any) {
    this.cart = this.cart.filter(m => m != $event)
  }
  buy($event: any) {
    this.cart.push($event)
  }

  products = [
    { id: 100, title: "3D Furniture Base Design Pack Code 5", price: "5$", pic: '100.jpg', for: "wood" },
    { id: 101, title: "3D Furniture Base Design Pack Code 4", price: "4.5$", pic: '101.jpg', for: "wood" },
    { id: 102, title: "3D Furniture Base Design Pack Code 3", price: "4.5$", pic: '102.jpg', for: "wood" },
    { id: 103, title: "3D Furniture Base Design Pack Code 2", price: "3$", pic: '103.jpg', for: "wood" },
    { id: 104, title: "3D Furniture Base Design Pack Code 1", price: "2.5$", pic: '104.jpg', for: "wood" },
    { id: 105, title: "3D design file code 59", price: "4$", pic: '105.jpg', for: "wood" },
    { id: 106, title: "3D design file code 58", price: "3.5$", pic: '106.jpg', for: "wood" },
    { id: 107, title: "3D design file code 57", price: "0.5$", pic: '107.jpg', for: "wood" },
    { id: 108, title: "3D design file code 56", price: "1.5$", pic: '108.jpg', for: "wood" },
    { id: 109, title: "3D design file code 55", price: "3.5$", pic: '109.jpg', for: "wood" },
    { id: 110, title: "3D design file code 54", price: "4.5$", pic: '110.jpg', for: "wood" },
    { id: 111, title: "3D design file code 53", price: "5$", pic: '111.jpg', for: "wood" },
    { id: 112, title: "3D design file code 52", price: "1.5$", pic: '112.jpg', for: "wood" },
    { id: 113, title: "3D design file code 51", price: "2.5$", pic: '113.jpg', for: "wood" },
    { id: 114, title: "3D design file code 50", price: "1.5$", pic: '114.jpg', for: "wood" },
    { id: 115, title: "3D design file code 49", price: "3.5$", pic: '115.jpg', for: "wood" },
  ]
  cart: any[] = [];
}
