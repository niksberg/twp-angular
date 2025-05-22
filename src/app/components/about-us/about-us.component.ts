import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUSComponent {
  activeButton: string = 'approach';
  activeDescription: string = 'td2';

  showApproach(buttonId: string) {
    this.activeButton = buttonId;
    switch (buttonId) {
      case 'approach':
        this.activeDescription = 'td2';
        break;
      case 'method':
        this.activeDescription = 'td3';
        break;
      case 'process':
        this.activeDescription = 'td4';
        break;
    }
  }
}
