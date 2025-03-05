import { Component } from '@angular/core';

interface prime {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class primeComponent {
  prime: prime[] = [
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Glowberry 500ml',
      image: './assets/prime/Prime Hydration Drink Glowberry 500ml.jpg',
      ar: 3990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Strawberry Watermelon 500ml',
      image: './assets/prime/Prime Hydration Drink Strawberry Watermelon 500ml.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Ice Pop 500ml',
      image: './assets/prime/Prime Hydration Drink Ice Pop 500ml.jpg',
      ar: 1790,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Blue Raspberry 500ml',
      image: './assets/prime/Prime Hydration Drink Blue Raspberry 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Lemon Lime 500ml',
      image: './assets/prime/Prime Hydration Drink Lemon Lime 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Grape 500ml',
      image: './assets/prime/Prime Hydration Drink Grape 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink UFC 300 500ml',
      image: './assets/prime/Prime Hydration Drink UFC 300 500ml.jpg',
      ar: 4990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Strawberry Banana 500ml',
      image: './assets/prime/Prime Hydration Drink Strawberry Banana 500ml.jpg',
      ar: 4990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Auston Matthews 500ml',
      image: './assets/prime/Prime Hydration Drink Auston Matthews 500ml.jpg',
      ar: 3990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink WWE 500ml',
      image: './assets/prime/Prime Hydration Drink WWE 500ml.jpg',
      ar: 3790,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Toronto Raptors Black 500ml',
      image: './assets/prime/Prime Hydration Drink Toronto Raptors Black 500ml.jpg',
      ar: 3990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Central Cee 500ml',
      image: './assets/prime/Prime Hydration Drink Central Cee 500ml.jpg',
      ar: 3490,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink LAKERS 500ml',
      image: './assets/prime/Prime Hydration Drink LAKERS 500ml.jpg',
      ar: 4590,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Kevin Durant 500ml',
      image: './assets/prime/Prime Hydration Drink Kevin Durant 500ml.jpg',
      ar: 4590,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Barcelona 500ml',
      image: './assets/prime/Prime Hydration Drink Barcelona 500ml.jpg',
      ar: 3490,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Meta Moon 500ml',
      image: './assets/prime/Prime Hydration Drink Meta Moon 500ml.jpg',
      ar: 1790,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.prime[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
