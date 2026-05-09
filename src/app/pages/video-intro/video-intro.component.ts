import {Component,ViewChild,ElementRef,OnInit} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-video-intro',
  templateUrl: './video-intro.component.html',
  styleUrls: ['./video-intro.component.css']
})
export class VideoIntroComponent implements OnInit {

  countdown = 3;

  showCountdown = true;

  @ViewChild('introVideo')
  video!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  ngOnInit() {

    const interval = setInterval(() => {

      this.countdown--;

      if (this.countdown === 0) {

        clearInterval(interval);

        this.showCountdown = false;

        // ▶️ start video AFTER countdown
        this.video.nativeElement.play();

      }

    }, 1000);

  }

  goToNextPage() {
    this.router.navigate(['/hello']);
  }

}