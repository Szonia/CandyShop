


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiokom',
  templateUrl: './fiokom.component.html',
  styleUrls: ['./fiokom.component.css']
})
export class FiokomComponent implements OnInit {
logout() {
throw new Error('Method not implemented.');
}
  user: any;  // Felhasználói adatok tárolása
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Ellenőrizzük, hogy a felhasználó be van-e jelentkezve
    if (!this.authService.isRegistered()) {
      // Ha nincs bejelentkezve, átirányítjuk a bejelentkezési oldalra
      this.router.navigate(['/login']);
    } else {
      // Ha be van jelentkezve, lekérjük a felhasználó adatait
      this.user = this.authService.getRegisteredUser();
    }
  }
}
