import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'verify',
    templateUrl: 'verify.component.html',
    styleUrls: ['verify.component.css']
})
export class VerifyComponent {
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
      this.router.navigate(['/verifyresults', this.candidate]);
      this.showLoading = false;
    }, 1000);
  }
}
