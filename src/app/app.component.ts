import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.models';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [SearchBarComponent],
  templateUrl :"./app.component.html",
  styleUrl:"./app.component.css" 
})
export class AppComponent {
  monstre1! : Monster;
  count:number= 0;

  constructor(){
    this.monstre1 = new Monster();
    this.monstre1.name = "Monstre 4";
    this.monstre1.hp = 13;
    this.monstre1.attackname = "Attaque du type mh";

    
  }

  incrementcount(){
      this.count++;
  }
}
