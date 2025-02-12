import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'bt-nav-tab',
  imports: [RouterOutlet, CarouselComponent, CardsComponent],
  templateUrl: './nav-tab.component.html',
  styleUrl: './nav-tab.component.scss'
})
export class NavTabComponent {

}
