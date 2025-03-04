import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes-detail',
  imports: [FormsModule,CommonModule ],
  templateUrl: './heroes-detail.component.html',
  styleUrl: './heroes-detail.component.scss'
})
export class HeroesDetailComponent {
  @Input() hero?: Hero;
}
