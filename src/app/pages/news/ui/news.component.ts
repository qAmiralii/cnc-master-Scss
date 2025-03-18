import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../../components/footer/ui/footer.component";
import { HeaderComponent } from "../../../components/header/ui/header.component";
import { NewsService } from '../../../components/servises/news/news.service';

@Component({
  selector: 'app-news',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  news = inject(NewsService);
}
