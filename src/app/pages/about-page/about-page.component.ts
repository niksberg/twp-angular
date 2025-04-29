import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { AboutBannerComponent } from '../../components/about-banner/about-banner.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent,
    AboutBannerComponent,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  // This component will serve as a container for the About page
}