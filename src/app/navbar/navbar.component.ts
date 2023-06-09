import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        { label: 'Home', routerLink: '/' },
        { label: 'About us', routerLink : '/about' },
        { label: 'Contact', routerLink: '/contact'},
    ];
}
}
