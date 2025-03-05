import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

interface EdesUditok {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-uditok',
  templateUrl: './edes-uditok.component.html',
  styleUrls: ['./edes-uditok.component.css']
})
export class EdesUditokComponent {
  uditok: EdesUditok[] = [
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Glowberry 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Glowberry 500ml.jpg',
      leiras: '',
      ar: 3990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Strawberry Watermelon 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Strawberry Watermelon 500ml.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Ice Pop 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Ice Pop 500ml.jpg',
      leiras: '',
      ar: 1790,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Blue Raspberry 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Blue Raspberry 500ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Lemon Lime 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Lemon Lime 500ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Grape 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Grape 500ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink UFC 300 500ml',
      image: './assets/uditokImg/Prime Hydration Drink UFC 300 500ml.jpg',
      leiras: '',
      ar: 4990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Strawberry Banana 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Strawberry Banana 500ml.jpg',
      leiras: '',
      ar: 4990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Auston Matthews 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Auston Matthews 500ml.jpg',
      leiras: '',
      ar: 3990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink WWE 500ml',
      image: './assets/uditokImg/Prime Hydration Drink WWE 500ml.jpg',
      leiras: '',
      ar: 3790,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Toronto Raptors Black 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Toronto Raptors Black 500ml.jpg',
      leiras: '',
      ar: 3990,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Central Cee 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Central Cee 500ml.jpg',
      leiras: '',
      ar: 3490,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink LAKERS 500ml',
      image: './assets/uditokImg/Prime Hydration Drink LAKERS 500ml.jpg',
      leiras: '',
      ar: 4590,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Kevin Durant 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Kevin Durant 500ml.jpg',
      leiras: '',
      ar: 4590,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Barcelona 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Barcelona 500ml.jpg',
      leiras: '',
      ar: 3490,
      darab: 1
    },
    {
      id: 'prime',
      nev: 'Prime Hydration Drink Meta Moon 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Meta Moon 500ml.jpg',
      leiras: '',
      ar: 1790,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Marvel LXR Hero Hydration Peach Mango 473ml',
      image: './assets/uditokImg/Arizona Marvel LXR Hero Hydration Peach Mango 473ml.jpg',
      leiras: '',
      ar: 2200,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Cherry Lime Rickey 650ml',
      image: './assets/uditokImg/Arizona Cherry Lime Rickey 650ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Frost Chillzicle 650ml',
      image: './assets/uditokImg/Arizona Frost Chillzicle 650ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Green Tea with Ginseng and Honey 650ml',
      image: './assets/uditokImg/Arizona Green Tea with Ginseng and Honey 650ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml',
      image: './assets/uditokImg/Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Mucho Mango 650ml',
      image: './assets/uditokImg/Arizona Mucho Mango 650ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Watermelon 650ml',
      image: './assets/uditokImg/Arizona Watermelon 650ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Fruit Punch 650ml',
      image: './assets/uditokImg/Arizona Fruit Punch 650ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Blueberry White Tea 500ml',
      image: './assets/uditokImg/Arizona Blueberry White Tea 500ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Pomegranate Green Tea 500ml',
      image: './assets/uditokImg/Arizona Pomegranate Green Tea 500ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Cowboy Cocktail Kiwi Strawberry 500ml',
      image: './assets/uditokImg/Arizona Cowboy Cocktail Kiwi Strawberry 500ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Berry 355ml',
      image: './assets/uditokImg/Fanta Berry 355ml.jpg',
      leiras: '',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Fruit Twist 330ml',
      image: './assets/uditokImg/Fanta Fruit Twist 330ml.jpg',
      leiras: '',
      ar: 690,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Grape 355ml',
      image: './assets/uditokImg/Fanta Grape 355ml.jpg',
      leiras: '',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Strawberry 350ml',
      image: './assets/uditokImg/Fanta Strawberry 350ml.jpg',
      leiras: '',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Peach 355ml',
      image: './assets/uditokImg/Fanta Peach 355ml.jpg',
      leiras: '',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Strawberry Kiwi Soda 330ml',
      image: './assets/uditokImg/Fanta Strawberry Kiwi Soda 330ml.jpg',
      leiras: '',
      ar: 480,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Exotic 330ml',
      image: './assets/uditokImg/Fanta Exotic 330ml.jpg',
      leiras: '',
      ar: 480,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Pineapple Soda 355ml',
      image: './assets/uditokImg/Fanta Pineapple Soda 355ml.jpg',
      leiras: '',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Green Apple 185ml',
      image: './assets/uditokImg/Fanta Green Apple 185ml.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Chinese Fanta White Peach 330ml',
      image: './assets/uditokImg/Chinese Fanta White Peach 330ml.jpg',
      leiras: '',
      ar: 790,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Drink Original 414ml',
      image: './assets/uditokImg/Skittles Drink Original 414ml.jpg',
      leiras: '',
      ar: 1780,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Drink Wild Berry 414ml',
      image: './assets/uditokImg/Skittles Drink Wild Berry 414ml.jpg',
      leiras: '',
      ar: 1790,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Drink Tropical 414ml',
      image: './assets/uditokImg/Skittles Drink Tropical 414ml.jpg',
      leiras: '',
      ar: 1790,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Tropical Liquid Water Enhancer 48ml',
      image: './assets/uditokImg/Skittles Tropical Liquid Water Enhancer 48ml.jpg',
      leiras: '',
      ar: 4510,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Tropical Punch flavored drink powder, 6-pack',
      image: './assets/uditokImg/Skittles Tropical Punch flavored drink powder, 6-pack.jpg',
      leiras: '',
      ar: 1416,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Wild Berry Water Enhancer 48ml',
      image: './assets/uditokImg/Skittles Wild Berry Water Enhancer 48ml.jpg',
      leiras: '',
      ar: 2573,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Kiwi Strawberry 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Kiwi Strawberry 500ml.jpg',
      leiras: '',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Blue Raspberry 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Blue Raspberry 500ml.jpg',
      leiras: '',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Lemon Crush 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Lemon Crush 500ml.jpg',
      leiras: '',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Tropical Mango 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Tropical Mango 500ml.jpg',
      leiras: '',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Cherry Limeade 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Cherry Limeade 500ml.jpg',
      leiras: '',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Citrus 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Citrus 500ml.jpg',
      leiras: '',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Orange Cream 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Orange Cream 500ml.jpg',
      leiras: '',
      ar: 7411,
      darab: 1
    }
  ];

  constructor(private cartService: CartService) {}
  
    kosarbaRak(i: number) {
      const termek = this.uditok[i];
      this.cartService.addToCart(termek.id, termek.nev, termek.ar);
      console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
      console.log('Kosár tartalma:', this.cartService.getCartItems());
    }
}
