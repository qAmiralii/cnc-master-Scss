import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { SupportFixComponent } from '../support-fix/support-fix.component';


@Component({
  selector: 'app-body',
  imports: [SupportFixComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  newsOpen: boolean = false;

  goNews() {
    if (this.newsOpen) {

    }
  }

}
