// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   imports: [],
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.scss'
// })
// export class ProductsComponent {

// }
import { Component, output } from '@angular/core';
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

  products = [
    { id: 100, title: "3D Furniture Base Design Pack Code 5", price: "40$", pic: '100.jpg', tPrice: 3600000, for: "wood" },
    { id: 101, title: "3D Furniture Base Design Pack Code 4", price: "45$", pic: '101.jpg', tPrice: 3600000, for: "wood" },
    { id: 102, title: "3D Furniture Base Design Pack Code 3", price: "45$", pic: '102.jpg', tPrice: 3600000, for: "wood" },
    { id: 103, title: "3D Furniture Base Design Pack Code 2", price: "30$", pic: '103.jpg', tPrice: 3600000, for: "wood" },
    { id: 104, title: "3D Furniture Base Design Pack Code 1", price: "25$", pic: '104.jpg', tPrice: 3600000, for: "wood" },
    { id: 105, title: "3D design file code 59", price: "40$", pic: '105.jpg', tPrice: 3600000, for: "wood" },
    { id: 106, title: "3D design file code 58", price: "35$", pic: '106.jpg', tPrice: 3600000, for: "wood" },
    { id: 107, title: "3D design file code 57", price: "20$", pic: '107.jpg', tPrice: 3600000, for: "wood" },
    { id: 108, title: "3D design file code 56", price: "25$", pic: '108.jpg', tPrice: 3600000, for: "wood" },
    { id: 109, title: "3D design file code 55", price: "35$", pic: '109.jpg', tPrice: 3600000, for: "wood" },
    { id: 110, title: "3D design file code 54", price: "45$", pic: '110.jpg', tPrice: 3600000, for: "wood" },
    { id: 111, title: "3D design file code 53", price: "27$", pic: '111.jpg', tPrice: 3600000, for: "wood" },
    { id: 112, title: "3D design file code 52", price: "15$", pic: '112.jpg', tPrice: 3600000, for: "wood" },
    { id: 113, title: "3D design file code 51", price: "25$", pic: '113.jpg', tPrice: 3600000, for: "wood" },
    { id: 114, title: "3D design file code 50", price: "15$", pic: '114.jpg', tPrice: 3600000, for: "wood" },
    { id: 115, title: "3D design file code 49", price: "35$", pic: '115.jpg', tPrice: 3600000, for: "wood" },
  ]
  cart: any[] = [];
}
