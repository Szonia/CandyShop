import { Component } from '@angular/core';

interface skittles {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-skittles',
  templateUrl: './skittles.component.html',
  styleUrls: ['./skittles.component.css']
})
export class skittlesComponent {
  skittles: skittles[] = [
    {
      id: 'skittles',
      nev: 'Skittles Drink Original 414ml',
      image: './assets/skittles/Skittles Drink Original 414ml.jpg',
      ar: 1780,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Drink Wild Berry 414ml',
      image: './assets/skittles/Skittles Drink Wild Berry 414ml.jpg',
      ar: 1790,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Drink Tropical 414ml',
      image: './assets/skittles/Skittles Drink Tropical 414ml.jpg',
      ar: 1790,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Drink Sour 414ml',
      image: './assets/skittles/Skittles Drink Sour 414ml.jpg',
      ar: 1790,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Crazy Sours 38g',
      image: './assets/skittles/Skittles Crazy Sours 38g.jpg',
      ar: 299,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Fruits 38g',
      image: './assets/skittles/Skittles Fruits 38g.jpg',
      ar: 360,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Crazy Sours 136g',
      image: './assets/skittles/Skittles Crazy Sours 136g.jpg',
      ar: 980,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles dóza 195g',
      image: './assets/skittles/Skittles dóza 195g.jpg',
      ar: 3868,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Fruity Tea 40g',
      image: './assets/skittles/Skittles Fruity Tea 40g.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Tropical Liquid Water Enhancer 48ml',
      image: './assets/skittles/Skittles Tropical Liquid Water Enhancer 48ml.jpg',
      ar: 4510,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Tropical Punch flavored drink powder, 6-pack',
      image: './assets/skittles/Skittles Tropical Punch flavored drink powder, 6-pack.jpg',
      ar: 1416,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Wild Berry Water Enhancer 48ml',
      image: './assets/skittles/Skittles Wild Berry Water Enhancer 48ml.jpg',
      ar: 2573,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.skittles[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
