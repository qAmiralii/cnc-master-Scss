import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CncRouterService } from '../../servises/products/cnc-router.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  category = inject(CncRouterService)
  goanimal() {
    this.category.menucategory = "reliefAnimal"
  }
  goWallpanel() {
    this.category.menucategory = "wallPanel";
  }
  Srouter() {
    this.category.menucategory = "cncRouterProducts";
  }
  reliefRouter() {
    this.category.menucategory = "relief";
  }


  hide() {
    this.showTopMenu = !this.showTopMenu;
  }
  isLoginOpen: boolean = false;
  showTopMenu: boolean = false;

  openpPage() {
    this.productsShow = !this.productsShow;
  }
  show: boolean = false;
  ifMenuClick = {
    sMenuClick: true,
  };
  productsShow: boolean = false;


}
