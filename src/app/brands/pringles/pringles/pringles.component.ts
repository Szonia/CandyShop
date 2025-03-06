import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';

interface pringles {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-pringles',
  templateUrl: './pringles.component.html',
  styleUrls: ['./pringles.component.css']
})
export class pringlesComponent {
  pringles: pringles[] = [
    {
      id: 'pringles',
      nev: 'Pringles Texas BBQ Sauce 165g',
      image: './assets/pringles/Pringles Texas BBQ Sauce 165g.jpg',
      leiras: 'A Pringles Texas BBQ Sauce egy csípős paradicsomszósz, fűszerek és füstös barbecue íz kombinációját kínáló chips, amely merész és intenzív ízélményt nyújt a klasszikus Pringles chipsek ropogós textúrájával.',
      ar: 1049,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Paprika 130g',
      image: './assets/pringles/Pringles Paprika 130g.jpg',
      leiras: 'A Pringles Paprika egy pikáns-édeskés, füstös paprika ízű chips, amely ropogós állagával és intenzív fűszerezésével kínál egy karakteres snack élményt, amelyben az édes és paprikás jegyek harmonikusan keverednek.',
      ar: 1049,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Original 165g',
      image: './assets/pringles/Pringles Original 165g.jpg',
      leiras: 'Klasszikus, semleges ízű Pringles, amely az alapvető snackélményt nyújtja.',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Sour Cream & Onion 165g',
      image: './assets/pringles/Pringles Sour Cream & Onion 165g.jpg',
      leiras: 'Észbontóan hagymás-tejfölös ízvilág, amely a Pringles egyik legnépszerűbb ízesítése.',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Hot & Spicy 165g',
      image: './assets/pringles/Pringles Hot & Spicy 165g.jpg',
      leiras: 'Csípős, fűszeres íz, amely azoknak való, akik szeretik a tüzes snackeket.',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Ranch 165g',
      image: './assets/pringles/Pringles Ranch 165g.jpg',
      leiras: 'Krémes, sajtos ízű Pringles, amely a klasszikus ranch mártást idézi.',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Jalapeño 165g',
      image: './assets/pringles/Pringles Jalapeño 165g.jpg',
      leiras: 'Csípős jalapeño ízű Pringles, amely azoknak való, akik szeretik a fűszeres snackeket.',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Pizza 165g',
      image: './assets/pringles/Pringles Pizza 165g.jpg',
      leiras: 'Olasz ízvilágot idéző Pringles, amely a pizza klasszikus ízeit ötvözi.',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Fűszeres Pringles Cheddar Cheese 165g',
      image: './assets/pringles/Pringles Cheddar Cheese 165g.jpg',
      leiras: 'Intenzív sajtos ízű Pringles, amely a cheddar sajt rajongóinak való.',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Scorchin Sour Cream & Onion 165g',
      image: './assets/pringles/Pringles Scorchin Sour Cream & Onion 165g.jpg',
      leiras: 'A klasszikus Sour Cream & Onion íz csípősebb változata.',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Loaded Potato Skins 165g',
      image: './assets/pringles/Pringles Loaded Potato Skins 165g.jpg',
      leiras: 'Új, limitált kiadású íz, amely a töltött krumplihéj ízeit idézi, sajttal, vajjal és szalonnás aromával.',
      ar: 1699,
      darab: 1
    }
  ];

  
  constructor(private cartService: CartService) {}
  
    kosarbaRak(i: number) {
      const termek = this.pringles[i];
      this.cartService.addToCart(termek.id, termek.nev, termek.ar);
      console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
      console.log('Kosár tartalma:', this.cartService.getCartItems());
    }
}
