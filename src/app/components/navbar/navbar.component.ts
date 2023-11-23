import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { createPopper } from '@popperjs/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
