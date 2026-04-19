import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  fullText = `Hey Nitika, Maitreya here, so this might sound a little random.

I think I saw you at that program at Celebreta hotel few years ago, and I just remembered it recently.  

I didn’t really get a chance to talk back then, but you seemed really nice.  

So I thought I’d just say hi now, Many thanks 🙂.  

Would you like to be friends?`;

  displayText = '';
  showButtons = false;

  x = 0;
  y = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    let i = 0;

    const interval = setInterval(() => {
      this.displayText += this.fullText[i];
      i++;

      if (i === this.fullText.length) {
        clearInterval(interval);
        this.showButtons = true;
      }
    }, 30);
  }

  onYes() {
    // you can route or show final message
    alert("Great, Thanks! Nice to meet you 😄");
  }

  moveButton(event: MouseEvent) {

  const button = event.target as HTMLElement;
  const rect = button.getBoundingClientRect();

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const buttonCenterX = rect.left + rect.width / 2;
  const buttonCenterY = rect.top + rect.height / 2;

  let dx = buttonCenterX - mouseX;
  let dy = buttonCenterY - mouseY;

  const distance = Math.sqrt(dx * dx + dy * dy) || 1;

  // Strong push away
  dx = (dx / distance) * 200;
  dy = (dy / distance) * 200;

  let newX = this.x + dx;
  let newY = this.y + dy;

  // 🧠 Screen limits (safe area)
  const maxX = 120; // half of 300 - padding
  const maxY = 60;  // half of 150 - padding

  // 🔥 TELEPORT LOGIC (edge escape)
  if (newY > maxY) {
    newY = -maxY + 20; // jump to top
  } else if (newY < -maxY) {
    newY = maxY - 20; // jump to bottom
  }

  if (newX > maxX) {
    newX = -maxX + 20; // jump left
  } else if (newX < -maxX) {
    newX = maxX - 20; // jump right
  }

  this.x = newX;
  this.y = newY;

  //this.x = Math.max(-maxX, Math.min(newX, maxX));
  //this.y = Math.max(-maxY, Math.min(newY, maxY));
}

}