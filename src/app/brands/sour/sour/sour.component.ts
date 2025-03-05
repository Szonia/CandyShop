import { Component } from '@angular/core';

interface sour {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-sour',
  templateUrl: './sour.component.html',
  styleUrls: ['./sour.component.css']
})
export class sourComponent {
  sour: sour[] = [
    {
      id: 'sour',
      nev: 'Sour Patch Kids Strawberry 102g',
      image: './assets/sour/Sour Patch Kids Strawberry 102g.jpg',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Cola Flavor 130g',
      image: './assets/sour/Sour Patch Kids Cola Flavor 130g.jpg',
      ar: 1390,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Blue Raspberry 102g',
      image: './assets/sour/Sour Patch Kids Blue Raspberry 102g.jpg',
      ar: 1190,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Lemonade Fest 102g',
      image: './assets/sour/Sour Patch Kids Lemonade Fest 102g.jpg',
      ar: 1390,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids 99g',
      image: './assets/sour/Sour Patch Kids 99g.jpg',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Extreme 99g',
      image: './assets/sour/Sour Patch Kids Extreme 99g.jpg',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Candy Family Size 816g',
      image: './assets/sour/Sour Patch Kids Candy Family Size 816g.jpg',
      ar: 6990,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Watermelon 130g',
      image: './assets/sour/Sour Patch Kids Watermelon 130g.jpg',
      ar: 1790,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Peach 102g',
      image: './assets/sour/Sour Patch Kids Peach 102g.jpg',
      ar: 1190,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Red White & Blue 87g',
      image: './assets/sour/Sour Patch Kids Red White & Blue 87g.jpg',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Christmas 88g',
      image: './assets/sour/Sour Patch Kids Christmas 88g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Fruit Mix 130g',
      image: './assets/sour/Sour Patch Kids Fruit Mix 130g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Black Raspberry Sour Hearts 87g',
      image: './assets/sour/Sour Patch Kids Black Raspberry Sour Hearts 87g.jpg',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Original 130g',
      image: './assets/sour/Sour Patch Kids Original 130g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Bites Strawberry, Green Apple & Blue Raspberry Sour Gummy Candy 105g',
      image: './assets/sour/Sour Punch Bites Strawberry, Green Apple & Blue Raspberry Sour Gummy Candy 105g.jpg',
      ar: 1090,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Bites Rad Reds Fruity Gummy Candy 142g',
      image: './assets/sour/Sour Punch Bites Rad Reds Fruity Gummy Candy 142g.jpg',
      ar: 1390,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy 56g',
      image: './assets/sour/Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy 56g.jpg',
      ar: 1090,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Bites Blue Raspberry Sour Gummy Candy 105g',
      image: './assets/sour/Sour Punch Bites Blue Raspberry Sour Gummy Candy 105g.jpg',
      ar: 1190,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.sour[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
