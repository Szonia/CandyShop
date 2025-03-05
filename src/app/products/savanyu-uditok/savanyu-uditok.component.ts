import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

interface SavanyuUditok {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-uditok',
  templateUrl: './savanyu-uditok.component.html',
  styleUrls: ['./savanyu-uditok.component.css']
})
export class SavanyuUditokComponent {
  uditok: SavanyuUditok[] = [
    {
      id: 'arizona',
      nev: 'Arizona Marvel LXR Hero Hydration Lemon Lime 473ml',
      image: './assets/uditokImg/Arizona Marvel LXR Hero Hydration Lemon Lime 473ml.jpg',
      leiras: 'Az Arizona Marvel LXR Hero Hydration Lemon Lime egy frissítő, szuperhős-inspirálta üdítőital, amely a citrom és lime élénk, citrusos ízét kombinálja egy alacsony cukortartalmú, elektrolitokban és vitaminokban gazdag formulával.',
      ar: 2200,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'WarHeads Sour Black Cherry Soda 355ml',
      image: './assets/uditokImg/WarHeads Sour Black Cherry Soda 355ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Blue Raspberry Soda 355ml',
      image: './assets/uditokImg/Warheads Blue Raspberry Soda 355ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'WarHeads Sour Green Apple Soda 355ml',
      image: './assets/uditokImg/WarHeads Sour Green Apple Soda 355ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour Watermelon Soda 355ml',
      image: './assets/uditokImg/Warheads Sour Watermelon Soda 355ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour peach soda 355ml',
      image: './assets/uditokImg/Warheads Sour peach soda 355ml.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Lemon Soda 330ml',
      image: './assets/uditokImg/Fanta Lemon Soda 330ml.jpg',
      leiras: '',
      ar: 480,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Lime 500ml',
      image: './assets/uditokImg/Fanta Lime 500ml.jpg',
      leiras: '',
      ar: 1280,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Drink Sour 414ml',
      image: './assets/uditokImg/Skittles Drink Sour 414ml.jpg',
      leiras: '',
      ar: 1790,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Sour Patch Kids 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Sour Patch Kids 500ml.jpg',
      leiras: '',
      ar: 2990,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Orange Squeeze 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Orange Squeeze 500ml.jpg',
      leiras: '',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Lemon Lime 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Lemon Lime 500ml.jpg',
      leiras: '',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Hydration Drink Sour Pink Lemonade 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Sour Pink Lemonade 500ml.jpg',
      leiras: '',
      ar: 7411,
      darab: 1
    },
    {
      id: 'ghost',
      nev: 'Ghost Energy Drink, Warheads Sour Watermelon 500ml',
      image: './assets/uditokImg/Ghost Energy Drink, Warheads Sour Watermelon 500ml.jpg',
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
