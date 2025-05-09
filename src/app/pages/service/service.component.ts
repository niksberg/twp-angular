import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { ServiceBannerComponent} from '../../components/service-banner/service-banner.component';
import {AboutWhatwedoComponent} from '../../components/about-whatwedo/about-whatwedo.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {TestimonialComponent} from '../../components/testimonial/testimonial.component';
import {GoodnessComponent} from '../../components/goodness/goodness.component';
import {CounterComponent} from '../../components/counter/counter.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent,
    ServiceBannerComponent,
    AboutWhatwedoComponent,
    TestimonialComponent,
    FooterComponent,
    GoodnessComponent,
    CounterComponent
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServicePageComponent {

}
