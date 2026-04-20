import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isPlaying = false;
  youtubeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  toggleMusic() {
    this.isPlaying = !this.isPlaying;

    if (this.isPlaying) {
      const url = 'https://www.youtube.com/embed/8zdg-pDF10g?autoplay=1&loop=1&playlist=8zdg-pDF10g';
      this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}