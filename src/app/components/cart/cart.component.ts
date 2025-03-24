import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/ui/header.component';
import { FooterComponent } from "../footer/ui/footer.component";
import { CartService } from '../servises/cart/cart.service';

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  carts = inject(CartService);
  
}
