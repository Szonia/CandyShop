import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';

interface Arizona {
  id: string;
  nev: string;
  image: string;
  leiras: string;
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
      leiras: 'Az Arizona Marvel LXR Hero Hydration Lemon Lime egy frissítő, szuperhős-inspirálta üdítőital, amely a citrom és lime élénk, citrusos ízét kombinálja egy alacsony cukortartalmú, elektrolitokban és vitaminokban gazdag formulával.',
      ar: 2200,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Marvel LXR Hero Hydration Peach Mango 473ml',
      image: './assets/arizona/Arizona Marvel LXR Hero Hydration Peach Mango 473ml.jpg',
      leiras: 'Az Arizona Marvel LXR Hero Hydration Peach Mango egy szuperhős-inspirálta üdítőital, amely a zamatos őszibarack és az egzotikus mangó édes ízeinek harmonikus keverékét kínálja, elektrolitokkal és vitaminokkal dúsítva.',
      ar: 2200,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Cherry Lime Rickey 650ml',
      image: './assets/arizona/Arizona Cherry Lime Rickey 650ml.jpg',
      leiras: 'Az Arizona Cherry Lime Rickey egy frissítő, enyhén savanykás cseresznye és lime ízű üdítőital, amely tökéletesen kiegyensúlyozza az édes és citrusos ízeket egy élénk és ínycsiklandó italban.',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Frost Chillzicle 650ml',
      image: './assets/arizona/Arizona Frost Chillzicle 650ml.jpg',
      leiras: 'Az Arizona Frost Chillzicle egy hűsítő és frissítő üdítő, amely az élénk gyümölcsízeket és a jeges frissességet ötvözi, tökéletes választás a forró napokra.',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Green Tea with Ginseng and Honey 650ml',
      image: './assets/arizona/Arizona Green Tea with Ginseng and Honey 650ml.jpg',
      leiras: 'Klasszikus zöld tea méz és ginzeng ízesítéssel, amely az Arizona legismertebb és legnépszerűbb terméke.',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml',
      image: './assets/arizona/Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml.jpg',
      leiras: 'Fekete tea és limonádé keveréke, amely Arnold Palmer golfozó nevét viseli.',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Mucho Mango 650ml',
      image: './assets/arizona/Arizona Mucho Mango 650ml.jpg',
      leiras: 'Intenzív mangó ízű gyümölcsital.',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Watermelon 650ml',
      image: './assets/arizona/Arizona Watermelon 650ml.jpg',
      leiras: 'Frissítő görögdinnye ízű ital.',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Fruit Punch 650ml',
      image: './assets/arizona/Arizona Fruit Punch 650ml.jpg',
      leiras: 'Többféle gyümölcs ízét ötvöző üdítőital.',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Blueberry White Tea 500ml',
      image: './assets/arizona/Arizona Blueberry White Tea 500ml.jpg',
      leiras: 'Áfonyás fehér tea, amely kellemes gyümölcsös ízt kínál.',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Pomegranate Green Tea 500ml',
      image: './assets/arizona/Arizona Pomegranate Green Tea 500ml.jpg',
      leiras: 'Gránátalmás zöld tea, amely ötvözi a zöld tea és a gránátalma jótékony hatásait.',
      ar: 990,
      darab: 1
    },
    {
      id: 'arizona',
      nev: 'Arizona Cowboy Cocktail Kiwi Strawberry 500ml',
      image: './assets/arizona/Arizona Cowboy Cocktail Kiwi Strawberry 500ml.jpg',
      leiras: 'Kivi és eper ízesítésű gyümölcskoktél.',
      ar: 990,
      darab: 1
    }
  ];

  
  constructor(private cartService: CartService) {}
  
    kosarbaRak(i: number) {
      const termek = this.arizona[i];
      this.cartService.addToCart(termek.id, termek.nev, termek.ar);
      console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
      console.log('Kosár tartalma:', this.cartService.getCartItems());
    }
}
