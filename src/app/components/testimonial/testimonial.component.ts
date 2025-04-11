import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  private currentPosition = 0;
  private readonly totalSlides = 3;
  private currentSlide = 0;

  slideTestimonials(direction: 'left' | 'right') {
    const testimonialCard = document.querySelector('.testimonial-card') as HTMLElement;
    if (!testimonialCard) return;

    if (direction === 'right' && this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
      this.currentPosition -= 33.33;
    } else if (direction === 'left' && this.currentSlide > 0) {
      this.currentSlide--;
      this.currentPosition += 33.33;
    }

    testimonialCard.style.transform = `translateX(${this.currentPosition}%)`;
    testimonialCard.style.transition = 'transform 0.5s ease-in-out';
  }
}
