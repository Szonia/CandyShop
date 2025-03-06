import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';

interface fanta {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-fanta',
  templateUrl: './fanta.component.html',
  styleUrls: ['./fanta.component.css']
})
export class fantaComponent {
  fanta: fanta[] = [
    {
      id: 'fanta',
      nev: 'Fanta Berry 355ml',
      image: './assets/fanta/Fanta Berry 355ml.jpg',
      leiras: 'A Fanta Berry egy bogyós gyümölcsök ízét idéző, frissítő szénsavas üdítőital, amely az áfonya és más erdei gyümölcsök édes-savanykás ízvilágát kínálja.',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Fruit Twist 330ml',
      image: './assets/fanta/Fanta Fruit Twist 330ml.jpg',
      leiras: 'A Fanta Fruit Twist egy izgalmas, többféle gyümölcs ízét ötvöző szénsavas üdítőital, amely a narancs, ananász és maracuja trópusi keverékét kínálja, frissítő és élénk ízélményt nyújtva.',
      ar: 690,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Grape 355ml',
      image: './assets/fanta/Fanta Grape 355ml.jpg',
      leiras: 'A Fanta Grape egy intenzív, édes szőlő ízű szénsavas üdítőital, amely a friss szőlő zamatos és üdítő ízvilágát kínálja, jellegzetes lila színével és buborékos frissességével.',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Strawberry 350ml',
      image: './assets/fanta/Fanta Strawberry 350ml.jpg',
      leiras: 'A Fanta Strawberry egy édes és zamatos, eper ízű szénsavas üdítőital, amely a friss, érett eprek ízvilágát idézi, üdítő buborékokkal és élénk rózsaszín színnel.',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Peach 355ml',
      image: './assets/fanta/Fanta Peach 355ml.jpg',
      leiras: 'A Fanta Peach egy zamatos, őszibarack ízű szénsavas üdítőital, amely a frissen szedett, érett őszibarack édes és aromás ízvilágát kínálja, üdítő buborékokkal és kellemes narancssárga színnel.',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Strawberry Kiwi Soda 330ml',
      image: './assets/fanta/Fanta Strawberry Kiwi Soda 330ml.jpg',
      leiras: 'A Fanta Strawberry Kiwi Soda egy frissítő szénsavas üdítőital, amely az édes eper és a savanykás kivi ízének harmonikus kombinációját kínálja, egyedi és egzotikus ízélményt nyújtva.',
      ar: 480,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Lemon Soda 330ml',
      image: './assets/fanta/Fanta Lemon Soda 330ml.jpg',
      leiras: 'A Fanta Lemon Soda egy frissítő citrusos üdítőital, amely a zamatos citrom savanykás és élénkítő ízét kínálja, tökéletes egyensúlyt teremtve az édesség és a citrusos frissesség között.',
      ar: 480,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Exotic 330ml',
      image: './assets/fanta/Fanta Exotic 330ml.jpg',
      leiras: 'A Fanta Exotic egy trópusi gyümölcsök ízvilágát idéző szénsavas üdítőital, amely egzotikus gyümölcsök, mint a maracuja, guava és ananász harmonikus keverékét kínálja, egyedi és izgalmas ízélményt nyújtva.',
      ar: 480,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Pineapple Soda 355ml',
      image: './assets/fanta/Fanta Pineapple Soda 355ml.jpg',
      leiras: 'A Fanta Pineapple Soda egy trópusi hangulatot idéző szénsavas üdítőital, amely az érett, zamatos ananász édes és enyhén savanykás ízét kínálja, frissítő buborékokkal és napfényes sárga színnel.',
      ar: 680,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Green Apple 185ml',
      image: './assets/fanta/Fanta Green Apple 185ml.jpg',
      leiras: 'A Fanta Green Apple egy élénk és frissítő zöldalma ízű szénsavas ital, amely édes és enyhén savanykás ízvilágával igazi üdítő élményt nyújt.',
      ar: 1290,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Chinese Fanta White Peach 330ml',
      image: './assets/fanta/Chinese Fanta White Peach 330ml.jpg',
      leiras: 'A Chinese Fanta White Peach egy üdítően édes és zamatos fehér őszibarack ízű szénsavas ital, amely frissítően gyümölcsös élményt nyújt.',
      ar: 790,
      darab: 1
    },
    {
      id: 'fanta',
      nev: 'Fanta Lime 500ml',
      image: './assets/fanta/Fanta Lime 500ml.jpg',
      leiras: 'A Fanta Lime egy frissítően citrusos, élénk lime ízű szénsavas üdítőital, amely tökéletes egyensúlyt teremt az édes és savanykás ízek között.',
      ar: 1280,
      darab: 1
    }
  ];

  
  constructor(private cartService: CartService) {}
  
    kosarbaRak(i: number) {
      const termek = this.fanta[i];
      this.cartService.addToCart(termek.id, termek.nev, termek.ar);
      console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
      console.log('Kosár tartalma:', this.cartService.getCartItems());
    }
}
