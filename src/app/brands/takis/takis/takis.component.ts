import { Component } from '@angular/core';

interface takis {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-takis',
  templateUrl: './takis.component.html',
  styleUrls: ['./takis.component.css']
})
export class takisComponent {
  takis: takis[] = [
    {
      id: 'takis',
      nev: 'Takis Blue Heat Spicy Mexican Chips 92g',
      image: './assets/takis/Takis Blue Heat Spicy Mexican Chips 92g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Guacamole Mexico 70g',
      image: './assets/takis/Takis Guacamole Mexico 70g.jpg',
      ar: 1390,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Queso Volcano Chips 90g',
      image: './assets/takis/Takis Queso Volcano Chips 90g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Fuego Hot Chips 90g',
      image: './assets/takis/Takis Fuego Hot Chips 90g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Nitro 113g',
      image: './assets/takis/Takis Nitro 113g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Crunchy Fajita 92g',
      image: './assets/takis/Takis Crunchy Fajita 92g.jpg',
      ar: 2363,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Dragon Sweet Chili 90g',
      image: './assets/takis/Takis Dragon Sweet Chili 90g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Intense Nacho 92g',
      image: './assets/takis/Takis Intense Nacho 92g.jpg',
      ar: 2190,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Zombie 92g',
      image: './assets/takis/Takis Zombie 92g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Waves Fuego 190g',
      image: './assets/takis/Takis Waves Fuego 190g.jpg',
      ar: 1473,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Hot Nuts Fuego 90g',
      image: './assets/takis/Takis Hot Nuts Fuego 90g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Stix Fuego 280g',
      image: './assets/takis/Takis Stix Fuego 280g.jpg',
      ar: 1513,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.takis[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
