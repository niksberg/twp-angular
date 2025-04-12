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
    this.initCounterAnimations();
  }

  private animateCounter(elementId: string, startValue: number, midValue: number, endValue: number) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let currentValue = startValue;
    const firstPhaseSteps = Math.ceil((midValue - startValue) / (3000 / 50));
    const secondPhaseSteps = Math.ceil((endValue - midValue) / (5000 / 50));
    
    // First phase animation (0 to midValue in 5 seconds)
    const firstPhase = setInterval(() => {
      currentValue += firstPhaseSteps;
      if (currentValue >= midValue) {
        currentValue = midValue;
        clearInterval(firstPhase);
        
        // Start second phase animation (midValue to endValue in 3 seconds)
        const secondPhase = setInterval(() => {
          currentValue += secondPhaseSteps;
          if (currentValue >= endValue) {
            currentValue = endValue;
            clearInterval(secondPhase);
          }
          element.textContent = currentValue.toString();
        }, 50);
      }
      element.textContent = currentValue.toString();
    }, 50);
  }

  private initCounterAnimations() {
    this.animateCounter('cn1', 1000, 1290, 1294);
    this.animateCounter('cn2', 3000, 3589, 3594);
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
