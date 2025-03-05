import { Component } from '@angular/core';

interface warheads {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-warheads',
  templateUrl: './warheads.component.html',
  styleUrls: ['./warheads.component.css']
})
export class warheadsComponent {
  warheads: warheads[] = [
    {
      id: 'warheads',
      nev: 'WarHeads Sour Black Cherry Soda 355ml',
      image: './assets/warheads/WarHeads Sour Black Cherry Soda 355ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Blue Raspberry Soda 355ml',
      image: './assets/warheads/Warheads Blue Raspberry Soda 355ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'WarHeads Sour Green Apple Soda 355ml',
      image: './assets/warheads/WarHeads Sour Green Apple Soda 355ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour Watermelon Soda 355ml',
      image: './assets/warheads/Warheads Sour Watermelon Soda 355ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour peach soda 355ml',
      image: './assets/warheads/Warheads Sour peach soda 355ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Care Bears Sour Grumpy Bears 99g',
      image: './assets/warheads/Warheads Care Bears Sour Grumpy Bears 99g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Galactic Mix Cubes 127g',
      image: './assets/warheads/Warheads Galactic Mix Cubes 127g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Ooze Chewz Sour Filled Candy 99g',
      image: './assets/warheads/Warheads Ooze Chewz Sour Filled Candy 99g.jpg',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Wedgies Sour Chewy Candy 99g',
      image: './assets/warheads/Warheads Wedgies Sour Chewy Candy 99g.jpg',
      ar: 1290,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour Worms 99g',
      image: './assets/warheads/Warheads Sour Worms 99g.jpg',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour Cubes Sour Gummies 113g',
      image: './assets/warheads/Warheads Sour Cubes Sour Gummies 113g.jpg',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'WarHeads Chewy Cubes Galactic Mix 99g',
      image: './assets/warheads/WarHeads Chewy Cubes Galactic Mix 99g.jpg',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour Cubes Berry Mix 99g',
      image: './assets/warheads/Warheads Sour Cubes Berry Mix 99g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Extreme Sour Hard Candy 92g',
      image: './assets/warheads/Warheads Extreme Sour Hard Candy 92g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Jelly Beans Sour Candy 113g',
      image: './assets/warheads/Warheads Jelly Beans Sour Candy 113g.jpg',
      ar: 1090,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Cubes 141g',
      image: './assets/warheads/Warheads Cubes 141g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Cubes 99g',
      image: './assets/warheads/Warheads Cubes 99g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Mega Sour Bombs 71g',
      image: './assets/warheads/Warheads Mega Sour Bombs 71g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour Ooze Chewz Ropes Bag 85g',
      image: './assets/warheads/Warheads Sour Ooze Chewz Ropes Bag 85g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Blue Raspberry Cubes 99g',
      image: './assets/warheads/Warheads Blue Raspberry Cubes 99g.jpg',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Extreme Sour Hard Candy 57g',
      image: './assets/warheads/Warheads Extreme Sour Hard Candy 57g.jpg',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Dipping Lollipop with Sour Powder 42g',
      image: './assets/warheads/Warheads Dipping Lollipop with Sour Powder 42g.jpg',
      ar: 690,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Extreme Sour Extra Sour Candy Assorted Flavors 4g',
      image: './assets/warheads/Warheads Extreme Sour Extra Sour Candy Assorted Flavors 4g.jpg',
      ar: 99,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.warheads[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
