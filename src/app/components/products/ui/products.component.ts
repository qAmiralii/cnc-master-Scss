import { Component, inject, output } from '@angular/core';
import { ProductComponent } from "../product/ui/product.component";
import { SupportFixComponent } from "../../support-fix/support-fix.component";
import { FooterComponent } from "../../footer/ui/footer.component";
import { RouterLink } from '@angular/router';
import { CncRouterService } from '../../servises/products/cnc-router.service';
import { HeaderComponent } from '../../header/ui/header.component';
import { CncWoodService } from '../../servises/products/cnc-wood.service';

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
  path: string = '';
  constructor() {
    this.path = this.routerProducts.menucategory;
  }

  routerProducts = inject(CncRouterService)

}
