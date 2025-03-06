import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';

interface cheetos {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-cheetos',
  templateUrl: './cheetos.component.html',
  styleUrls: ['./cheetos.component.css']
})
export class cheetosComponent {
  cheetos: cheetos[] = [
    {
      id: 'cheetos',
      nev: 'Cheetos Mac and Cheese Jalapeño 164g',
      image: './assets/cheetos/Cheetos Mac and Cheese Jalapeño 164g.jpg',
      leiras: 'A Cheetos Mac and Cheese Jalapeño egy pikáns, csípős tésztaétel, amely ötvözi a klasszikus sajtos makaróni krémes ízét a Cheetos ropogós textúrájával és a jalapeño paprika csípős, füstös aromájával.',
      ar: 2490,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Mac and Cheese Four Cheesy 170g',
      image: './assets/cheetos/Cheetos Mac and Cheese Four Cheesy 170g.jpg',
      leiras: 'A Cheetos Mac and Cheese Four Cheesy egy gazdag, krémes tésztaétel, amely négyféle sajt intenzív ízét kombinálja a Cheetos jellegzetes, sajtos aromájával, létrehozva egy különlegesen ízletes és kielégítő makaróni élményt.',
      ar: 2690,
      darab: 1
    },{
      id: 'cheetos',
      nev: 'Cheetos Japan Steak Flavor Chips 90g',
      image: './assets/cheetos/Cheetos Japan Steak Flavor Chips 90g.jpg',
      leiras: 'A Cheetos Japan Steak Flavor Chips egy különleges, japán steak ízvilágát idéző kukoricás snack, amely a hagyományos japán marhahús zamatos, fűszeres ízét kombinálja a Cheetos jellegzetes ropogós textúrájával.',
      ar: 1690,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Flamin Hot Crunchy 226g',
      image: './assets/cheetos/Cheetos Flamin Hot Crunchy 226g.jpg',
      leiras: 'Ikonikus csípős íz, amely rendkívül népszerű a rajongók körében',
      ar: 3490,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Puffs 226g',
      image: './assets/cheetos/Cheetos Puffs 226g.jpg',
      leiras: 'Klasszikus sajtos íz könnyű, levegős textúrával, amely sokak gyerekkori kedvence.',
      ar: 3990,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Flamin Hot Puffs 226g',
      image: './assets/cheetos/Cheetos Flamin Hot Puffs 226g.jpg',
      leiras: 'A népszerű csípős íz puffasztott változata, amely még intenzívebb ízélményt nyújt.',
      ar: 3490,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Popcorn Cheddar 17g',
      image: './assets/cheetos/Cheetos Popcorn Cheddar 17g.jpg',
      leiras: 'Sajtos ízesítésű pattogatott kukorica, amely ötvözi a Cheetos és a popcorn legjobb tulajdonságait.',
      ar: 3090,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Simply Puffs White Cheddar 70g',
      image: './assets/cheetos/Cheetos Simply Puffs White Cheddar 70g.jpg',
      leiras: 'Fehér cheddar sajttal ízesített puffasztott kukoricasnack.',
      ar: 4090,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Fantastix Chili Cheese 28g',
      image: './assets/cheetos/Cheetos Fantastix Chili Cheese 28g.jpg',
      leiras: 'Vékony, pálcika alakú snack intenzív sajtízzel.',
      ar: 3250,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Crunchetos Sweet Chili flavour 110g',
      image: './assets/cheetos/Cheetos Crunchetos Sweet Chili flavour 110g.jpg',
      leiras: 'Nagyobb méretű, ropogós kukoricachips édes-csípős chili ízesítéssel.',
      ar: 240,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Crunchy Xxtra Flamin Hot Cheese Flavored 240g',
      image: './assets/cheetos/Cheetos Crunchy Xxtra Flamin Hot Cheese Flavored 240g.jpg',
      leiras: 'Ropogós kukoricachips édes-csípős chili aromával, intenzív ízélményt nyújtva.',
      ar: 7380,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Beef and Onions Flavor 40g',
      image: './assets/cheetos/Cheetos Beef and Onions Flavor 40g.jpg',
      leiras: 'Még csípősebb változata a klasszikus Flamin Hot íznek.',
      ar: 2330,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Big Chipito Sweet Chilli flavour 100g',
      image: './assets/cheetos/Cheetos Big Chipito Sweet Chilli flavour 100g.jpg',
      leiras: 'Ropogós kukoricasnack intenzív marhahús és hagyma ízesítéssel, kisebb kiszerelésben.',
      ar: 990,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Crunchy Cheddar Jalapeño Chips 226g',
      image: './assets/cheetos/Cheetos Crunchy Cheddar Jalapeño Chips 226g.jpg',
      leiras: 'Tökéletes egyensúly a sajtos és csípős ízek között, intenzív jalapeño aromával.',
      ar: 1990,
      darab: 1
    }
  ];

  
  constructor(private cartService: CartService) {}
  
    kosarbaRak(i: number) {
      const termek = this.cheetos[i];
      this.cartService.addToCart(termek.id, termek.nev, termek.ar);
      console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
      console.log('Kosár tartalma:', this.cartService.getCartItems());
    }
}
