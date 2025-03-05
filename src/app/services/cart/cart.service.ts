import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { id: string, name: string, price: number, quantity: number }[] = [];

  addToCart(id: string, name: string, price: number) {
    const existingItem = this.cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ id, name, price, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeFromCart(productId: string) {
    this.cart = this.cart.filter(item => item.id !== productId);
  }
}