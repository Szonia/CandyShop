import { Component } from '@angular/core';

interface ghost {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.css']
})
export class ghostComponent {
  ghost: ghost[] = [
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Sour Patch Kids 500ml',
      image: './assets/ghost/Ghost Hydration Drink Sour Patch Kids 500ml.jpg',
      ar: 2990,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Orange Squeeze 500ml',
      image: './assets/ghost/Ghost Hydration Drink Orange Squeeze 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Kiwi Strawberry 500ml',
      image: './assets/ghost/Ghost Hydration Drink Kiwi Strawberry 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Lemon Lime 500ml',
      image: './assets/ghost/Ghost Hydration Drink Lemon Lime 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Blue Raspberry 500ml',
      image: './assets/ghost/Ghost Hydration Drink Blue Raspberry 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Lemon Crush 500ml',
      image: './assets/ghost/Ghost Hydration Drink Lemon Crush 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Tropical Mango 500ml',
      image: './assets/ghost/Ghost Hydration Drink Tropical Mango 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Cherry Limeade 500ml',
      image: './assets/ghost/Ghost Hydration Drink Cherry Limeade 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Citrus 500ml',
      image: './assets/ghost/Ghost Hydration Drink Citrus 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Orange Cream 500ml',
      image: './assets/ghost/Ghost Hydration Drink Orange Cream 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Sour Pink Lemonade 500ml',
      image: './assets/ghost/Ghost Hydration Drink Sour Pink Lemonade 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Energy Drink, Warheads Sour Watermelon 500ml',
      image: './assets/ghost/Ghost Energy Drink, Warheads Sour Watermelon 500ml.jpg',
      ar: 7411,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.ghost[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
