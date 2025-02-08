import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  imports: [LoginComponent , ProductsComponent , RouterLink,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
hide() {
  this.showTopMenu=!this.showTopMenu;
}
  isLoginOpen: boolean = false;
  showTopMenu: boolean = false;
  constructor(private router: Router) {
    // گوش دادن به تغییرات Route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // اگر Route فعلی مربوط به ورود نبود، وضعیت رو بازنشانی کن
        if (event.url !== '/signUp') {
          this.isLoginOpen = false;
        }
      }
    });
  }

  showMenu() {
    if (this.isLoginOpen) {
      // اگر کامپوننت ورود باز است، به صفحه اصلی برگرد
      this.router.navigate(['/']);
    } else {
      // اگر کامپوننت ورود بسته است، به صفحه ورود برو
      this.router.navigate(['/signUp']);
    }
    this.isLoginOpen = !this.isLoginOpen;
  }




  openpPage() {
    this.productsShow = !this.productsShow;
  }
  show: boolean = false;
  ifMenuClick = {
    sMenuClick: true,
  };
  productsShow: boolean = false;


}
