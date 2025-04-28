import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AboutComponent } from '../../components/about/about.component';
import { MoreworkComponent } from '../../components/morework/morework.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { WhyChooseComponent } from '../../components/why-choose/why-choose.component';
import { TeamComponent } from '../../components/team/team.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent,
    BannerComponent,
    ServicesComponent,
    AboutComponent,
    MoreworkComponent,
    TestimonialComponent,
    WhyChooseComponent,
    TeamComponent,
    ContactComponent,
    BlogComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  // This component will serve as the main landing page
}