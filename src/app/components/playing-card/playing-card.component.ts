import { Component } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  name:string = "My monster2";
  hp: number =40;
  figureCaption: String = "N 001";
  attackname: string = "Geo Impact";
  attackForce:number = 60;
  attackDescription: string = "This a logn description"
}
