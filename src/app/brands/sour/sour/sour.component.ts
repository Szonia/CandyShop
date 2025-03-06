import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

interface sour {
  id: string;
  nev: string;
  image: string;
  leiras: string;
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
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Cola Flavor 130g',
      image: './assets/sour/Sour Patch Kids Cola Flavor 130g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Blue Raspberry 102g',
      image: './assets/sour/Sour Patch Kids Blue Raspberry 102g.jpg',
      leiras: '',
      ar: 1190,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Lemonade Fest 102g',
      image: './assets/sour/Sour Patch Kids Lemonade Fest 102g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids 99g',
      image: './assets/sour/Sour Patch Kids 99g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Extreme 99g',
      image: './assets/sour/Sour Patch Kids Extreme 99g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Candy Family Size 816g',
      image: './assets/sour/Sour Patch Kids Candy Family Size 816g.jpg',
      leiras: '',
      ar: 6990,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Watermelon 130g',
      image: './assets/sour/Sour Patch Kids Watermelon 130g.jpg',
      leiras: '',
      ar: 1790,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Peach 102g',
      image: './assets/sour/Sour Patch Kids Peach 102g.jpg',
      leiras: '',
      ar: 1190,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Red White & Blue 87g',
      image: './assets/sour/Sour Patch Kids Red White & Blue 87g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Christmas 88g',
      image: './assets/sour/Sour Patch Kids Christmas 88g.jpg',
      leiras: '',
      ar: 1690,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Fruit Mix 130g',
      image: './assets/sour/Sour Patch Kids Fruit Mix 130g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Black Raspberry Sour Hearts 87g',
      image: './assets/sour/Sour Patch Kids Black Raspberry Sour Hearts 87g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Original 130g',
      image: './assets/sour/Sour Patch Kids Original 130g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Bites Strawberry, Green Apple & Blue Raspberry Sour Gummy Candy 105g',
      image: './assets/sour/Sour Punch Bites Strawberry, Green Apple & Blue Raspberry Sour Gummy Candy 105g.jpg',
      leiras: '',
      ar: 1090,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Bites Rad Reds Fruity Gummy Candy 142g',
      image: './assets/sour/Sour Punch Bites Rad Reds Fruity Gummy Candy 142g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy 56g',
      image: './assets/sour/Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy 56g.jpg',
      leiras: '',
      ar: 1090,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Bites Blue Raspberry Sour Gummy Candy 105g',
      image: './assets/sour/Sour Punch Bites Blue Raspberry Sour Gummy Candy 105g.jpg',
      leiras: '',
      ar: 1190,
      darab: 1
    }
  ];

  
  constructor(private cartService: CartService) {}
  
    kosarbaRak(i: number) {
      const termek = this.sour[i];
      this.cartService.addToCart(termek.id, termek.nev, termek.ar);
      console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
      console.log('Kosár tartalma:', this.cartService.getCartItems());
    }
}
