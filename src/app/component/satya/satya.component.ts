import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-satya',
  templateUrl: './satya.component.html',
  styleUrls: ['./satya.component.scss']
})
export class SatyaComponent {
  constructor(private route:Router) {}
  GoToParent(){
      this.route.navigateByUrl("parent")
  }

  GoToChild(){
    this.route.navigateByUrl("child")
  }

  GoTonext(){
    this.route.navigateByUrl("next")
  }
}

