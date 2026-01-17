import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  messages = [
    'No',
    'amor por que?',
    'ya no me amas?',
    'PORFAVOOR, PROMETO CUIDARTE 🥺',
    'voy a inseminarte si vuelves a picarle que no 💔',
    'sobre aviso no hay engaño amor'
  ];

  index = 0;
  noMessage = 'No';
  yesSize = 16;

  handleNoClick() {
    this.noMessage = this.messages[this.index];
    this.index = (this.index + 1) % this.messages.length;
    this.yesSize *= 1.4;
  }

  handleYesClick() {
    alert('I LOVE YOU BABY MUAK MUAK MUAK💖');
  }
}
