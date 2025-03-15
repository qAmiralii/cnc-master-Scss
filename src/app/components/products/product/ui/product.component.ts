
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { FooterComponent } from "../../../footer/ui/footer.component";
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [DecimalPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() toman=false;

  @Input() kala: any;
  @Output() onRemove = new EventEmitter<any>;
  @Output() ontest = new EventEmitter<any>;

}
