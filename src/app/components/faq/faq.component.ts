import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  standalone: true
})
export class FaqComponent implements AfterViewInit {
  @ViewChild('faqBanner') faqBanner!: ElementRef;
  activeQuestionIndex: number | null = null;

  toggleAnswer(index: number) {
    this.activeQuestionIndex = this.activeQuestionIndex === index ? null : index;
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (this.faqBanner) {
      observer.observe(this.faqBanner.nativeElement);
    }
  }
}
