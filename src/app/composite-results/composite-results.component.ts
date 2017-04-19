import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'composite-results',
    templateUrl: 'composite-results.component.html',
    styleUrls: ['composite-results.component.css']
})
export class CompositeResultsComponent {
  public photos: Array<object> = [];

  constructor() {}

  public ngOnInit() {
    this.photos = [
       {
         url: '../images/composite.png',
         confidence: '0.49',
       },
       {
         url: '../images/M.as.yg.md.bk.bn.ngl.sh2.jpg',
         confidence: '0.49',
       },
       {
         url: '../images/M.as.yg.md.bk.bn.gl.sh3.jpg',
         confidence: '0.43',
       },
       {
         url: '../images/M.wt.yg.st.bk.bu.ngl.sh5.jpg',
         confidence: '0.39',
       },
       {
         url: '../images/M.wt.yg.md.bk.bu.ngl.sh.jpg',
         confidence: '0.39',
       },
       {
         url: '../images/M.as.yg.md.bk.bn.gl.sh2.jpg',
         confidence: '0.38',
       },
       {
         url: '../images/M.as.yg.md.bk.bn.ngl.sh4.jpg',
         confidence: '0.38',
       },
       {
         url: '../images/M.as.yg.lg.bk.bn.gl.sh.jpg',
         confidence: '0.37',
       },
       {
         url: '../images/wm1564c.jpg',
         confidence: '0.35',
       },
       {
         url: '../images/M.as.yg.md.bk.bn.ngl.sh.jpg',
         confidence: '0.32',
       },
    ];
  }

}
