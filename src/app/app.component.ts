import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [patterns]="customPatterns" mask="00.000.000-c" />
  `
})
export class AppComponent {
  public customPatterns = { 
    '0': { pattern: /\d/ },
    'c': { pattern: new RegExp('\[12K59\]') } 
  };
}
