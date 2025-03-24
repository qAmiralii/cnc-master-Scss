import { Component, inject, output } from '@angular/core';
import { ProductComponent } from "../product/ui/product.component";
import { SupportFixComponent } from "../../support-fix/support-fix.component";
import { FooterComponent } from "../../footer/ui/footer.component";
import { RouterLink } from '@angular/router';
import { CncRouterService } from '../../servises/products/cnc-router.service';
import { HeaderComponent } from '../../header/ui/header.component';
import { Product } from '../../../models/product';
import { CartService } from '../../servises/cart/cart.service';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, SupportFixComponent, FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
buy($event: Product) {
  if(this.cartadding.cart.every(x => x.id != $event.id)){
    this.cartadding.cart.push($event)
  }
}
  cartadding = inject(CartService)
  change: boolean = true;
  changeCurency() {
    this.change = !this.change;
  }
  path: string = '';
  constructor() {
    this.path = this.filter.menucategory;
  }

  filter = inject(CncRouterService)
  modelProducts = inject(CncRouterService).cncProducts.filter(x => x.category == this.filter.menucategory)

}
