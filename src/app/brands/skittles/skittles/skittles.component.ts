import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

interface skittles {
  id: string;
  nev: string;
  image: string;
  leiras: string;
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
      leiras: '',
      ar: 1780,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Drink Wild Berry 414ml',
      image: './assets/skittles/Skittles Drink Wild Berry 414ml.jpg',
      leiras: '',
      ar: 1790,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Drink Tropical 414ml',
      image: './assets/skittles/Skittles Drink Tropical 414ml.jpg',
      leiras: '',
      ar: 1790,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Drink Sour 414ml',
      image: './assets/skittles/Skittles Drink Sour 414ml.jpg',
      leiras: '',
      ar: 1790,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Crazy Sours 38g',
      image: './assets/skittles/Skittles Crazy Sours 38g.jpg',
      leiras: '',
      ar: 299,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Fruits 38g',
      image: './assets/skittles/Skittles Fruits 38g.jpg',
      leiras: '',
      ar: 360,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Crazy Sours 136g',
      image: './assets/skittles/Skittles Crazy Sours 136g.jpg',
      leiras: '',
      ar: 980,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles dóza 195g',
      image: './assets/skittles/Skittles dóza 195g.jpg',
      leiras: '',
      ar: 3868,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Fruity Tea 40g',
      image: './assets/skittles/Skittles Fruity Tea 40g.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Tropical Liquid Water Enhancer 48ml',
      image: './assets/skittles/Skittles Tropical Liquid Water Enhancer 48ml.jpg',
      leiras: '',
      ar: 4510,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Tropical Punch flavored drink powder, 6-pack',
      image: './assets/skittles/Skittles Tropical Punch flavored drink powder, 6-pack.jpg',
      leiras: '',
      ar: 1416,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Wild Berry Water Enhancer 48ml',
      image: './assets/skittles/Skittles Wild Berry Water Enhancer 48ml.jpg',
      leiras: '',
      ar: 2573,
      darab: 1
    }
  ];

  
  constructor(private cartService: CartService) {}
  
    kosarbaRak(i: number) {
      const termek = this.skittles[i];
      this.cartService.addToCart(termek.id, termek.nev, termek.ar);
      console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
      console.log('Kosár tartalma:', this.cartService.getCartItems());
    }
}
