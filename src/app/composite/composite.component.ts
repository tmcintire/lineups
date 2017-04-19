import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'composite',
    templateUrl: 'composite.component.html',
    styleUrls: ['composite.component.css']
})
export class CompositeComponent {
  public showLoading: boolean = false;
  public candidate: string;
  public suspectPhoto: string;

  constructor(
    private router: Router,
  ) {}

  public inputPhoto(evt: any) {
    let file = evt.target.files[0];
    this.suspectPhoto = `../candidates/${file.name}`;
    this.candidate = this.suspectPhoto.split('-')[1].split('.')[0];
  }

  public submitPhoto() {
    this.showLoading = true;
    setTimeout(() => {
      this.router.navigate(['/compositeresults', this.candidate]);
      this.showLoading = false;
    }, 1000);
  }


}
