import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/ui/footer.component";
import { HeaderComponent } from '../../components/header/ui/header.component';
import { AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [FooterComponent, HeaderComponent , ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  
}
