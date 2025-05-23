import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { AboutBannerComponent } from '../../components/about-banner/about-banner.component';
import { AboutUSComponent } from '../../components/about-us/about-us.component';
import { TeamComponent } from '../../components/team/team.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import {AboutWhatwedoComponent} from '../../components/about-whatwedo/about-whatwedo.component';
import { PriceComponent} from '../../components/price/price.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { FaqComponent } from '../../components/faq/faq.component';
@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent,
    AboutBannerComponent,
    AboutUSComponent,
    TeamComponent,
    TestimonialComponent,
    AboutWhatwedoComponent,
    PriceComponent,
    FooterComponent,
    FaqComponent
],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  // This component will serve as a container for the About page
}