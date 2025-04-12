import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.observeScroll();
  }

  private observeScroll() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const heroImage = this.elementRef.nativeElement.querySelector('.about-hero-image');
    if (heroImage) {
      observer.observe(heroImage);
    }
  }
}
