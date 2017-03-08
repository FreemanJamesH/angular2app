import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>Inline Template</h1>
   <app-databinding></app-databinding>
  `,
})
export class AppComponent {
  title = 'app works!';
}
