import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  changeButton! : string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.changeButton = 'Oh Snap!';
  }

  onAddSnap() {
    if (this.snaps == 0) {
      this.snaps++;
      this.changeButton = 'Oh already Snapped !'
    }
    else{
      this.snaps--;
      this.changeButton = 'Oh Snap!'
    }
  }
}
