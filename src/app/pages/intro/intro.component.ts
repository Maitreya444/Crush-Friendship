import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  name = 'Nitika!!';
  text = '';
  fullText = "I made something for you...";

  ngOnInit() 
  {
    let i = 0;
    const interval = setInterval(() => 
      {
        this.text += this.fullText[i];
        i++;
        if (i === this.fullText.length) clearInterval(interval);
    }, 50);
  }
}
