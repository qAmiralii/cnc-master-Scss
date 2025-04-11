import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/ui/products.component';
import { NewsComponent } from './pages/news/ui/news.component';
import { BodyComponent } from './components/body/body.component';
import { SupportComponent } from './pages/support/support.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './components/login/ui/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'products', component: ProductsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'home', component: BodyComponent },
  { path: 'support', component: SupportComponent },
  { path: 'about', component: AboutComponent },
  { path:'',component: BodyComponent}
];
