import { Component } from '@angular/core';

interface cheetos {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-cheetos',
  templateUrl: './cheetos.component.html',
  styleUrls: ['./cheetos.component.css']
})
export class cheetosComponent {
  cheetos: cheetos[] = [
    {
      id: 'cheetos',
      nev: 'Cheetos Mac and Cheese Jalapeño 164g',
      image: './assets/cheetos/Cheetos Mac and Cheese Jalapeño 164g.jpg',
      ar: 2490,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Mac and Cheese Four Cheesy 170g',
      image: './assets/cheetos/Cheetos Mac and Cheese Four Cheesy 170g.jpg',
      ar: 2690,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Japan Steak Flavor Chips 90g',
      image: './assets/cheetos/Cheetos Japan Steak Flavor Chips 90g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Crunchy Cheddar Jalapeño Chips 226g',
      image: './assets/cheetos/Cheetos Crunchy Cheddar Jalapeño Chips 226g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Flamin Hot Crunchy 226g',
      image: './assets/cheetos/Cheetos Flamin Hot Crunchy 226g.jpg',
      ar: 3490,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Puffs 226g',
      image: './assets/cheetos/Cheetos Puffs 226g.jpg',
      ar: 3990,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Flamin Hot Puffs 226g',
      image: './assets/cheetos/Cheetos Flamin Hot Puffs 226g.jpg',
      ar: 3490,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Popcorn Cheddar 17g',
      image: './assets/cheetos/Cheetos Popcorn Cheddar 17g.jpg',
      ar: 3090,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Simply Puffs White Cheddar 70g',
      image: './assets/cheetos/Cheetos Simply Puffs White Cheddar 70g.jpg',
      ar: 4090,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Fantastix Chili Cheese 28g',
      image: './assets/cheetos/Cheetos Fantastix Chili Cheese 28g.jpg',
      ar: 3250,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Big Chipito Sweet Chilli flavour 100g',
      image: './assets/cheetos/Cheetos Big Chipito Sweet Chilli flavour 100g.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Crunchetos Sweet Chili flavour 110g',
      image: './assets/cheetos/Cheetos Crunchetos Sweet Chili flavour 110g.jpg',
      ar: 240,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Crunchy Xxtra Flamin Hot Cheese Flavored 240g',
      image: './assets/cheetos/Cheetos Crunchy Xxtra Flamin Hot Cheese Flavored 240g.jpg',
      ar: 7380,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Beef and Onions Flavor 40g',
      image: './assets/cheetos/Cheetos Beef and Onions Flavor 40g.jpg',
      ar: 2330,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.cheetos[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
