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

  slideTestimonials(direction: 'left' | 'right') {
    const testimonialCard = document.querySelector('.testimonial-card') as HTMLElement;
    if (!testimonialCard) return;

    if (direction === 'right' && this.currentPosition > -50) {
      this.currentPosition -= 50;
    } else if (direction === 'left' && this.currentPosition < 0) {
      this.currentPosition += 50;
    }

    testimonialCard.style.transform = `translateX(${this.currentPosition}%)`;
  }
}
