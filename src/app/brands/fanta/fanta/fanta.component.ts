import { Component } from '@angular/core';

interface fanta {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-fanta',
  templateUrl: './fanta.component.html',
  styleUrls: ['./fanta.component.css']
})
export class fantaComponent {
  fanta: fanta[] = [
    {
      id: 'fanta',
      nev: 'Fanta Berry 355ml',
      image: './assets/fanta/Fanta Berry 355ml.jpg',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Fruit Twist 330ml',
      image: './assets/fanta/Fanta Fruit Twist 330ml.jpg',
      ar: 690,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Grape 355ml',
      image: './assets/fanta/Fanta Grape 355ml.jpg',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Strawberry 350ml',
      image: './assets/fanta/Fanta Strawberry 350ml.jpg',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Peach 355ml',
      image: './assets/fanta/Fanta Peach 355ml.jpg',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Strawberry Kiwi Soda 330ml',
      image: './assets/fanta/Fanta Strawberry Kiwi Soda 330ml.jpg',
      ar: 480,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Lemon Soda 330ml',
      image: './assets/fanta/Fanta Lemon Soda 330ml.jpg',
      ar: 480,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Exotic 330ml',
      image: './assets/fanta/Fanta Exotic 330ml.jpg',
      ar: 480,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Pineapple Soda 355ml',
      image: './assets/fanta/Fanta Pineapple Soda 355ml.jpg',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Lime 500ml',
      image: './assets/fanta/Fanta Lime 500ml.jpg',
      ar: 1280,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Green Apple 185ml',
      image: './assets/fanta/Fanta Green Apple 185ml.jpg',
      ar: 1290,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Chinese Fanta White Peach 330ml',
      image: './assets/fanta/Chinese Fanta White Peach 330ml.jpg',
      ar: 790,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.fanta[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
