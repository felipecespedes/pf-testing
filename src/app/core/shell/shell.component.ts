import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ShellComponent {

  constructor() {
  }

}
