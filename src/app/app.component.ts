import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavTabComponent } from './nav-tab/nav-tab.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EjAngularBootstrap';
}
