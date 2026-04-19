import { Component, AfterViewInit } from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-yes-flowers',
  templateUrl: './yes-flowers.component.html',
  styleUrls: ['./yes-flowers.component.css']
})
export class YesFlowersComponent {
ngAfterViewInit() {
    if ((window as any).Tenor) {
      (window as any).Tenor.initialize();
    }
  }
}
