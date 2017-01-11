import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]>{

    console.log(this.http.get(this.heroUrl)
          .toPromise()
          .then(response => response.json().data as Hero[]));

    return this.http.get(this.heroUrl)
          .toPromise()
          .then(response => response.json().data as Hero[])
  }

/*  getHeroes(): Hero[] {

    let heroes = [
      {id: 1, name: 'Tiago'},
      {id: 2, name: 'Tania'},
      {id: 3, name: 'Michelle'}
    ];

    return heroes;

  }*/


}
