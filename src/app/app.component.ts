/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <h1>Your Face</h1>
    <nav class="flex-row">
      <a [routerLink]=" ['./lineup'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Lineup
      </a>
      <a [routerLink]=" ['./composite'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Composite
      </a>
      <a [routerLink]=" ['./verify'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Verify
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState,
    public router: Router,
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  public lineupCreation() {
    this.router.navigate(['/inputphoto', 'lineup']);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
