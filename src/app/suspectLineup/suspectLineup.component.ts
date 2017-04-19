import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../app.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
// import { FindSimilarService } from '../findSimlar.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'suspectLineup',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './suspectLineup.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './suspectLineup.component.html'
})
export class SuspectLineupComponent implements OnInit {

  public photos = [];
  // caucasian male
  public photos1 = [
    '../images/M.wt.yg.st.br.bn.ngl.sh6.jpg',
    '../images/wm9265c.jpg',
    '../images/M.wt.yg.st.bl.bn.ngl.sh8.jpg',
    '../images/m.wt.yg.st.br.bu.ngl.sh20.jpg',
    '../images/M.wt.yg.st.bk.bn.ngl.sd4.jpg',
    '../images/wm3939c.jpg',
  ];

  // asian male
  public photos2 = [
     '../images/M.as.yg.md.bk.bn.ngl.sh.jpg',
     '../images/M.hs.yg.md.bk.bn.ngl.sh.jpg',
     '../images/M.as.yg.md.bk.bn.ngl.sh6.jpg',
     '../images/M.as.yg.md.bk.bn.ngl.sh2.jpg',
     '../images/M.as.yg.md.bk.bn.ngl.sd.jpg',
     '../images/M.as.yg.md.bk.bn.ngl.sh5.jpg',
  ];

  public photos3 = [
    '../images/F.wt.yg.md.bk.bu.ngl.jpg',
    '../images/f.wt.ma.md.bl.bu.ngl.jpg',
    '../images/F.wt.yg.lg.br.bn.ngl54.jpg',
    '../images/F.wt.yg.lg.br.bu.ngl14.jpg',
    '../images/F.wt.yg.lg.bk.bn.ngl21.jpg',
    '../images/F.wt.yg.lg.rd.bn.ngl5.jpg',
  ];

  public selectedImage: Number;
  public showSignature: boolean = false;
  public sub: any;
  public candidate: string;

  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    minWidth: 2,
    canvasWidth: 700,
    canvasHeight: 172
  };

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    private route: ActivatedRoute,
    private router: Router,
    // public findSimlar: FindSimilarService,
  ) {}

  public ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
       this.candidate = params['candidate']; // (+) converts string 'id' to a number

       switch (this.candidate) {
         case '1':
          this.photos = this.photos1;
          break;
        case '2':
          this.photos = this.photos2;
          break;
        case '6':
          this.photos = this.photos3;
          break;
        default:
          break;
       }
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public highlightImage(index) {
      this.selectedImage = index;
      this.showSignature = true;
  };

  public submitLineup() {
    setTimeout(() => {
      this.router.navigate(['/lineupSubmitted']);
    }, 500);
  }

  public drawStart() {}

  public drawComplete() {}
}
