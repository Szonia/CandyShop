import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';

interface bazooka {
  id: string;
  nev: string;
  image: string;
  leiras: string;
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
      leiras: 'A Bazooka Rattlerz Sour Chewy Candy egy intenzíven savanyú, gyümölcsös ízű rágócukorka, amely édes, ropogós héjában savanyú porral van bevonva, és élénk, csípős savanyúságot kínál az ízlelőbimbóknak.',
      ar: 563,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Melting Fruity Candy 40g',
      image: './assets/bazooka/Bazooka Rattlerz Melting Fruity Candy 40g.jpg',
      leiras: 'A Bazooka Rattlerz Melting Fruity Candy egy gyümölcsös ízű olvadós cukorka, amely édes, ropogós héjában intenzív gyümölcsös ízeket kínál, és könnyen felolvad a szájban.',
      ar: 563,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Share Bag 100g',
      image: './assets/bazooka/Bazooka Rattlerz Fruity Share Bag 100g.jpg',
      leiras: 'Változatos gyümölcsös ízek keveréke, intenzív és édes aromákkal.',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Sour Share Bag 120g',
      image: './assets/bazooka/Bazooka Rattlerz Sour Share Bag 120g.jpg',
      leiras: 'Csípős, savanyú ízek kavalkádja, amely bizsergető érzést kelt a nyelven.',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Bag 40g',
      image: './assets/bazooka/Bazooka Rattlerz Fruity Bag 40g.jpg',
      leiras: 'Kompakt kiszerelésű, élénk gyümölcsös ízekkel teli rágócukorka.',
      ar: 304,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Chewy Candies 120g',
      image: './assets/bazooka/Bazooka Rattlerz Fruity Chewy Candies 120g.jpg',
      leiras: 'Puha, rágós textúrájú cukorkák gazdag, gyümölcsös ízvilággal.',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Sour Chewy Candies 120g',
      image: './assets/bazooka/Bazooka Rattlerz Sour Chewy Candies 120g.jpg',
      leiras: 'Savanyú, csípős ízű rágós cukorkák, amelyek intenzív ízélményt nyújtanak.',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity 12x120g',
      image: './assets/bazooka/Bazooka Rattlerz Fruity 12x120g.jpg',
      leiras: 'Nagyobb kiszerelésű, változatos gyümölcsös ízeket tartalmazó csomag.',
      ar: 4100,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Chewy Candy 10x18g',
      image: './assets/bazooka/Bazooka Rattlerz Fruity Chewy Candy 10x18g.jpg',
      leiras: 'Egyéni csomagolású, gyümölcsös ízű rágócukorkák praktikus kiszerelésben.',
      ar: 1200,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Juicy Drop Pop 26g',
      image: './assets/bazooka/Bazooka Juicy Drop Pop 26g.jpg',
      leiras: 'Kemény nyalóka ízletes gyümölcsös ízekben, kiegészítve egy külön tartályban lévő savanyú folyadékkal, amit rá lehet csepegtetni a nyalókára az intenzívebb ízélményért.',
      ar: 950,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Push Pop 15g',
      image: './assets/bazooka/Bazooka Push Pop 15g.jpg',
      leiras: 'Nyomható nyalóka, amely lehetővé teszi, hogy élvezd az édes, gyümölcsös ízeket, majd elmentsd későbbre a praktikus tubusban.',
      ar: 490,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Ring Pop 15g',
      image: './assets/bazooka/Bazooka Ring Pop 15g.jpg',
      leiras: 'Gyűrű alakú nyalóka, amely intenzív gyümölcsös ízeket kínál, miközben játékos kiegészítőként is szolgál.',
      ar: 390,
      darab: 1
    }
  ];

  
  constructor(private cartService: CartService) {}
  
    kosarbaRak(i: number) {
      const termek = this.bazooka[i];
      this.cartService.addToCart(termek.id, termek.nev, termek.ar);
      console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
      console.log('Kosár tartalma:', this.cartService.getCartItems());
    }
}
