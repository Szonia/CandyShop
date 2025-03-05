

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service'; 

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.css']
})
export class KosarComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId);
    this.loadCart(); // Frissíti a kosarat az eltávolítás után
  }
}
