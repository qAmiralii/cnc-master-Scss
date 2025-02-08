
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() kala: any;
  @Output() onBuy=new EventEmitter;
  @Output() onRemove=new EventEmitter;
  @Input() action ="buy";
  buy(y:any) {
    if (this.action=="buy") {
      this.onBuy.emit(y);
    }
    else{
      this.onRemove.emit(y);
    }
  }
}
