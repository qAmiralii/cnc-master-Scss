import { Component, inject, output } from '@angular/core';
import { ProductComponent } from "../product/ui/product.component";
import { SupportFixComponent } from "../../support-fix/support-fix.component";
import { FooterComponent } from "../../footer/ui/footer.component";
import { RouterLink } from '@angular/router';
import { CncRouterService } from '../../servises/products/cnc-router.service';
import { HeaderComponent } from '../../header/ui/header.component';

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
  category: any[] = this.routerProducts.cncRouterProducts.filter(x => x.category == this.routerProducts.menucategory)






  cart: any[] = [];
}
