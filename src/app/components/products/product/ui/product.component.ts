
import { Component, EventEmitter, inject, Input, input, Output, output } from '@angular/core';
import { FooterComponent } from "../../../footer/ui/footer.component";
import { DecimalPipe } from '@angular/common';
import { Product } from '../../../../models/product';
import { AlertsService } from '../../../servises/alert/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [DecimalPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
aded() {
  this.theAlert.newAlert("The Product added!",2000);

}
  router = inject(Router)
  theAlert = inject(AlertsService)
  @Input() toman = false;
  @Input() kala!: Product;
  @Output() onRemove = new EventEmitter<any>;
  @Output() onBuy = new EventEmitter<any>;
  @Input() isInBasket = false;

}
