import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
  selectedPlan: string | null = null;

  selectPlan(planTitle: string, event: MouseEvent) {
    // Toggle selection: if clicking the same plan, unselect it
    this.selectedPlan = this.selectedPlan === planTitle ? null : planTitle;
    
    // Only show confetti when selecting a plan, not when unselecting
    if (this.selectedPlan) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      confetti({
      particleCount: 150,
      spread: 90,
      startVelocity: 20,
      origin: { 
        x: x / window.innerWidth,
        y: y / window.innerHeight
      },
      colors: ['#FFB629', '#FF902A', '#2A4E6E', '#091242'],
      ticks: 100
    });
  }
  }
}
