import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  // The selector is what angular internally uses
  selector: 'lineupSubmitted',
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './lineupSubmitted.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './lineupSubmitted.component.html'
})
export class LineupSubmittedComponent implements OnInit {
  // Set our default values
  public dateObject: Date;
  public date: string;
  public caseNumber: string;
  // TypeScript public modifiers
  constructor() {}

  public ngOnInit() {
    this.dateObject = new Date();
    this.date = this.dateObject.toLocaleString();
    this.caseNumber = `2017${this.dateObject.getDate()}${this.dateObject.getMilliseconds()}`;
  }
}
