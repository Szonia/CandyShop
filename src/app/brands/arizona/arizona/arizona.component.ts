import { Component } from '@angular/core';

interface Arizona {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-arizona',
  templateUrl: './arizona.component.html',
  styleUrls: ['./arizona.component.css']
})
export class ArizonaComponent {
  arizona: Arizona[] = [
    {
      id: 'arizona',
      nev: 'Arizona Marvel LXR Hero Hydration Lemon Lime 473ml',
      image: './assets/arizona/Arizona Marvel LXR Hero Hydration Lemon Lime 473ml.jpg',
      ar: 2200,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Marvel LXR Hero Hydration Peach Mango 473ml',
      image: './assets/arizona/Arizona Marvel LXR Hero Hydration Peach Mango 473ml.jpg',
      ar: 2200,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Cherry Lime Rickey 650ml',
      image: './assets/arizona/Arizona Cherry Lime Rickey 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Frost Chillzicle 650ml',
      image: './assets/arizona/Arizona Frost Chillzicle 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Green Tea with Ginseng and Honey 650ml',
      image: './assets/arizona/Arizona Green Tea with Ginseng and Honey 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml',
      image: './assets/arizona/Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Mucho Mango 650ml',
      image: './assets/arizona/Arizona Mucho Mango 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Watermelon 650ml',
      image: './assets/arizona/Arizona Watermelon 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Fruit Punch 650ml',
      image: './assets/arizona/Arizona Fruit Punch 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Blueberry White Tea 500ml',
      image: './assets/arizona/Arizona Blueberry White Tea 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Pomegranate Green Tea 500ml',
      image: './assets/arizona/Arizona Pomegranate Green Tea 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Cowboy Cocktail Kiwi Strawberry 500ml',
      image: './assets/arizona/Arizona Cowboy Cocktail Kiwi Strawberry 500ml.jpg',
      ar: 990,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.arizona[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
