import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from '../components/intro/intro.component';
import { HeroesComponent } from '../components/heroes/heroes/heroes.component';
import { MessageComponent } from '../components/message/message/message.component';
import { HeroesDetailComponent } from '../components/heroes/heroes-detail/heroes-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
