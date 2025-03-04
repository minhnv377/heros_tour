import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private heroesService: HeroesService) {}
  heroes:Hero[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }

  /**
   * Retrieves a list of heroes from the service and assigns the result to the component's 'heroes' field.
   * The list is sliced to only include the second through fifth element (inclusive) of the retrieved list.
   */
  getHeroes(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
