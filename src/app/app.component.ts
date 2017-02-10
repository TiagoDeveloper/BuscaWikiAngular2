import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   items: Array<string>;

  constructor(private wikipediaService: WikipediaService) {}

  search(term) {
    this.wikipediaService.search(term)
                         .then(tet => this.items = tet);
  }
}
