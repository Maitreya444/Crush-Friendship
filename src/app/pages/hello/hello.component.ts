import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  admin = "Maitreya";

  constructor(private router: Router) {}

  onYes() {
    this.router.navigate(['/yes']);
  }

  onNo() {
    this.router.navigate(['/no']);
  }
}