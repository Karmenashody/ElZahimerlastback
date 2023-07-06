import { Component, OnInit } from '@angular/core';
import { Card } from '../Interfaces/Card';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit{
  selectedCards: Array<Card> = [];
  cards: Array<Card> = [];
  firstPick = null;
  secondPick = null;
  score: number = 0;
  countMatched: number = 0;
  isGameOver: boolean = false;
  colors = [
    { name: 'red', color: 'red', flipped: false, matched: false },
    { name: 'red', color: 'red', flipped: false, matched: false },
    { name: 'orange', color: 'orange', flipped: false, matched: false },
    { name: 'orange', color: 'orange', flipped: false, matched: false },
    { name: 'yellow', color: 'yellow', flipped: false, matched: false },
    { name: 'yellow', color: 'yellow', flipped: false, matched: false },
    { name: 'green', color: 'green', flipped: false, matched: false },
    { name: 'green', color: 'green', flipped: false, matched: false },
    { name: 'blue', color: 'blue', flipped: false, matched: false },
    { name: 'blue', color: 'blue', flipped: false, matched: false },
    { name: 'purple', color: 'purple', flipped: false, matched: false },
    { name: 'purple', color: 'purple', flipped: false, matched: false },
    { name: 'brown', color: 'brown', flipped: false, matched: false },
    { name: 'brown', color: 'brown', flipped: false, matched: false },
    { name: 'pink', color: 'pink', flipped: false, matched: false },
    { name: 'pink', color: 'pink', flipped: false, matched: false }
  ];


  ngOnInit(): void {
    this.shuffleArray();
  }

  shuffleArray() {
    for (let i = this.colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.colors[i], this.colors[j]] = [this.colors[j], this.colors[i]];
    }
    for (let i = 0; i < this.colors.length; i++) {
      this.cards.push({ name: this.colors[i].name, color: this.colors[i].color, flipped: false, matched: false });
    }
}

flipCard(index: any) {

  if (this.selectedCards.length == 2 && this.selectedCards[1].flipped)
    return;

  if (this.firstPick === null) {
    this.firstPick = index;
    this.cards[index].flipped = true;
    this.selectedCards.push(this.cards[index]);
  } else {

    this.secondPick = index;
    this.cards[index].flipped = true;

    this.selectedCards.push(this.cards[index]);

    if (this.secondPick !== null) {

      if (this.colors[this.firstPick].color === this.colors[this.secondPick].color) {

        setTimeout(() => {

          this.cards[this.firstPick!].matched = true;
          this.cards[this.secondPick!].matched = true;
          this.firstPick = null;
          this.secondPick = null;
          this.selectedCards = [];
          this.score += 1;
          this.countMatched += 1;

          if (this.countMatched == 8)
            this.isGameOver = true;

        }, 2000);
      }
      else {

        setTimeout(() => {

          if (this.firstPick !== null && this.secondPick !== null) {
            this.cards[this.firstPick].flipped = false;
            this.cards[this.secondPick].flipped = false;
            this.firstPick = null;
            this.secondPick = null;
            this.selectedCards = [];
            this.score = this.score - 1 > 0 ? this.score - 1 : 0;
          }
        }, 1000);
      }

    }
  }
}
}
