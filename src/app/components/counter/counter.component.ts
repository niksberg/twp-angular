import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  standalone: true
})
export class CounterComponent implements OnInit {
  private animateCounter(elementId: string, startValue: number, endValue: number) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const duration = 40000; // 10 seconds
    const steps = Math.ceil((endValue - startValue) / (duration / 200)); // Update every 50ms
    let currentValue = startValue;

    const interval = setInterval(() => {
      currentValue += steps;
      if (currentValue >= endValue) {
        currentValue = endValue;
        clearInterval(interval);
      }
      element.textContent = Math.floor(currentValue).toString();
    }, 50);
  }

  ngOnInit() {
    // Start animations for all counters with different starting values
    this.animateCounter('ct1', 1200, 1294);
    this.animateCounter('ct2', 3500, 3594);
    this.animateCounter('ct3', 200, 247);
    this.animateCounter('ct0', 10, 24); // For the first counter
  }
}
