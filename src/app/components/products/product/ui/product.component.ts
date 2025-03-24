
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { FooterComponent } from "../../../footer/ui/footer.component";
import { DecimalPipe } from '@angular/common';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-product',
  imports: [DecimalPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() toman = false;
  @Input() kala!: Product;
  @Output() onRemove = new EventEmitter<any>;
  @Output() onBuy = new EventEmitter<any>;
  @Input() isInBasket = false;

}
