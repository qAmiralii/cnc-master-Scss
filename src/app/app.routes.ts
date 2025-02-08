import { Routes } from '@angular/router';
import { SingInComponent } from './components/login/sing-in/sing-in.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { NewsComponent } from './pages/news/news.component';
import { BodyComponent } from './components/body/body.component';
import { SupportComponent } from './pages/support/support.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'login', component: SingInComponent },
  { path: 'signUp', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'home', component: BodyComponent },
  { path: 'support', component: SupportComponent },
  { path: 'about', component: AboutComponent }
];
