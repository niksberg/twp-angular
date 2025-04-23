import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoreworkComponent } from "./components/morework/morework.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import {WhyChooseComponent} from "./components/why-choose/why-choose.component";
import { TeamComponent } from "./components/team/team.component";
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from "./components/blog/blog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    BannerComponent,
    ServicesComponent,
    AboutComponent,
    FooterComponent,
    MoreworkComponent,
    TestimonialComponent,
    WhyChooseComponent,
    TeamComponent,
    ContactComponent,
    BlogComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'transitflow-angularpage';
}
