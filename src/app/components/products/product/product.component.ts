
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [FooterComponent,DecimalPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() toman=false;


  @Input() kala: any;
  @Output() onBuy = new EventEmitter<any>;
  @Output() onRemove = new EventEmitter<any>;
  @Input() action = "buy";
  buy(y: any) {
    if (this.action == "buy") {
      this.onBuy.emit(y);
    }
    else {
      this.onRemove.emit(y);
    }
  }
}
