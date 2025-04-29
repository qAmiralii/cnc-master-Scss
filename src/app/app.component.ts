import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/ui/header.component';
import 'flowbite';
import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cncMaster_sCSS';
  constructor(private router: Router) { }
  // router = @inject(Router);     چرا این کار نمی کند

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Initialize Flowbite پس از هر نویگیت
        initFlowbite();
      }
    });
  }
}
