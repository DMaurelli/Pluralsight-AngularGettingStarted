import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: `
                <div><h1>{{pageTitle}}<h1>
                  <div>My First Component<div>
                </div>
              `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
