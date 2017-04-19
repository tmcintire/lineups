import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';
// import { FindSimilarService } from '../findSimlar.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'lineup',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './lineup.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './lineup.component.html'
})
export class LineupComponent implements OnInit {
  // Set our default values
  public file: File;
  public suspectPhoto = '';
  public showLoading: boolean = false;
  public candidate: string;

  // TypeScript public modifiers
  constructor(
    private router: Router
    // public findSimlar: FindSimilarService,
  ) {}

  public ngOnInit() {

  }

  public inputPhoto(evt: any) {
    let file = evt.target.files[0];
    this.suspectPhoto = `../candidates/${file.name}`;
    this.candidate = this.suspectPhoto.split('-')[1].split('.')[0];
  }

  public submitPhoto() {
    this.showLoading = true;
    setTimeout(() => {
      this.router.navigate(['/suspectLineup', this.candidate]);
      this.showLoading = false;
    }, 1000);
  }
}
