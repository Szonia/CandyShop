import { Component } from '@angular/core';

interface nerds {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-nerds',
  templateUrl: './nerds.component.html',
  styleUrls: ['./nerds.component.css']
})
export class nerdsComponent {
  nerds: nerds[] = [
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters Very Berry 142g',
      image: './assets/nerds/Nerds Gummy Clusters Very Berry 142g.jpg',
      ar: 2190,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters 141g',
      image: './assets/nerds/Nerds Gummy Clusters 141g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters Theater Box 85g',
      image: './assets/nerds/Nerds Gummy Clusters Theater Box 85g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Candy Grape and Strawberry 142g',
      image: './assets/nerds/Nerds Candy Grape and Strawberry 142g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters Very Berry Share Pouch 85g',
      image: './assets/nerds/Nerds Gummy Clusters Very Berry Share Pouch 85g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Big Chewy Theater Box 120g',
      image: './assets/nerds/Nerds Big Chewy Theater Box 120g.jpg',
      ar: 1430,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Frosty Fruit Candy 141g',
      image: './assets/nerds/Nerds Frosty Fruit Candy 141g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Wonka Nerds Grape And Strawberry 47g',
      image: './assets/nerds/Wonka Nerds Grape And Strawberry 47g.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Fruits Candy 142g',
      image: './assets/nerds/Nerds Fruits Candy 142g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Watermelon And Cherry 47g',
      image: './assets/nerds/Nerds Watermelon And Cherry 47g.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Wonka Nerds Rope Rainbow Candy 26g',
      image: './assets/nerds/Wonka Nerds Rope Rainbow Candy 26g.jpg',
      ar: 990,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.nerds[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
