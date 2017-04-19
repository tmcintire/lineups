import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'verify-results',
    templateUrl: 'verify-results.component.html',
    styleUrls: ['verify-results.component.css']
})
export class VerifyResultsComponent {
  public photos: Array<object> = [];
  public originalPhoto: string;
  public sub: any;
  public candidate: string;

  public photos1 = [
     {
       url: '../images/wm2094c.jpg',
       confidence: '0.94',
     },
     {
       url: '../images/M.wt.yg.st.br.hz.ngl.sh23.jpg',
       confidence: '0.53',
     },
     {
       url: '../images/wm5774c.jpg',
       confidence: '0.51',
     },
     {
       url: '../images/M.wt.yg.md.br.bn.ngl.sh42.jpg',
       confidence: '0.49',
     },
     {
       url: '../images/wm5241c.jpg',
       confidence: '0.49',
     },
     {
       url: '../images/M.wt.yg.st.br.bu.ngl.sh4.jpg',
       confidence: '0.49',
     },
     {
       url: '../images/wm8027c.jpg',
       confidence: '0.48',
     },
     {
       url:  '../images/M.wt.yg.st.br.bn.ngl.sh40.jpg',
       confidence: '0.48',
     },
     {
       url: '../images/M.wt.yg.md.br.bn.ngl.sh4.jpg',
       confidence: '0.47',
     },
     {
       url: '../images/m.wt.yg.st.bl.bu.ngl.sh52.jpg',
       confidence: '0.46',
     }
  ];

  public photos2 = [
     {
       url: '../images/wm3217c.jpg',
       confidence: '0.88',
     },
     {
       url: '../images/M.wt.yg.md.bl.bu.ngl.sh44.jpg',
       confidence: '0.50',
     },
     {
       url: '../images/M.wt.yg.md.br.gn.ngl.sh7.jpg',
       confidence: '0.43',
     },
     {
       url: '../images/m.wt.yg.md.bl.bu.ngl.sh5.jpg',
       confidence: '0.43',
     },
     {
       url: '../images/M.wt.yg.lg.br.bn.ngl.sh4.jpg',
       confidence: '0.43',
     },
     {
       url: '../images/M.wt.yg.md.bl.bn.ngl.sh.jpg',
       confidence: '0.42',
     },
     {
       url: '../images/M.wt.yg.st.bl.bu.ngl.sh51.jpg',
       confidence: '0.42',
     },
     {
       url: '../images/wm6524c.jpg',
       confidence: '0.41',
     },
     {
       url: '../images/wm6524c.jpg',
       confidence: '0.41',
     },
     {
       url: '../images/m.wt.yg.st.br.gn.ngl.sh4.jpg',
       confidence: '0.41',
     }
  ];

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.candidate = params['candidate'];
      this.originalPhoto = `../candidates/candidate-${params['candidate']}.jpg`;

    });

    switch (this.candidate) {
      case '3':
       this.photos = this.photos1;
       break;
     case '5':
       this.photos = this.photos2;
       break;
     default:
       break;
    }
  }
}
