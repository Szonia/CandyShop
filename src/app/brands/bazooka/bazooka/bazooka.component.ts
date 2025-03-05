import { Component } from '@angular/core';

interface bazooka {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-bazooka',
  templateUrl: './bazooka.component.html',
  styleUrls: ['./bazooka.component.css']
})
export class bazookaComponent {
  bazooka: bazooka[] = [
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Sour Chewy Candy 40g',
      image: './assets/bazooka/Bazooka Rattlerz Sour Chewy Candy 40g.jpg',
      ar: 563,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Melting Fruity Candy 40g',
      image: './assets/bazooka/Bazooka Rattlerz Melting Fruity Candy 40g.jpg',
      ar: 563,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Share Bag 100g',
      image: './assets/bazooka/Bazooka Rattlerz Fruity Share Bag 100g.jpg',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Sour Share Bag 120g',
      image: './assets/bazooka/Bazooka Rattlerz Sour Share Bag 120g.jpg',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Bag 40g',
      image: './assets/bazooka/Bazooka Rattlerz Fruity Bag 40g.jpg',
      ar: 304,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Chewy Candies 120g',
      image: './assets/bazooka/Bazooka Rattlerz Fruity Chewy Candies 120g.jpg',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Sour Chewy Candies 120g',
      image: './assets/bazooka/Bazooka Rattlerz Sour Chewy Candies 120g.jpg',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity 12x120g',
      image: './assets/bazooka/Bazooka Rattlerz Fruity 12x120g.jpg',
      ar: 4100,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Chewy Candy 10x18g',
      image: './assets/bazooka/Bazooka Rattlerz Fruity Chewy Candy 10x18g.jpg',
      ar: 1200,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Juicy Drop Pop 26g',
      image: './assets/bazooka/Bazooka Juicy Drop Pop 26g.jpg',
      ar: 950,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Push Pop 15g',
      image: './assets/bazooka/Bazooka Push Pop 15g.jpg',
      ar: 490,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Ring Pop 15g',
      image: './assets/bazooka/Bazooka Ring Pop 15g.jpg',
      ar: 390,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.bazooka[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
