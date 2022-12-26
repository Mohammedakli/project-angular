import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap! :FaceSnap
  changeButton! : string

  ngOnInit() {
    this.changeButton = 'Oh Snap!';
  }

  onAddSnap() {
    if (this.faceSnap.snaps == 0) {
      this.faceSnap.snaps++;
      this.changeButton = 'Oh already Snapped !'
    }
    else{
      this.faceSnap.snaps--;
      this.changeButton = 'Oh Snap!'
    }
  }
}
