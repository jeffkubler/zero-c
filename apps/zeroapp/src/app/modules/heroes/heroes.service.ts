import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '@zeroc/api';
import { env } from '../../../environments/environment';
const api = "localhost:3000";

const headers =  new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  async getHeroes(id?: number): Promise<Hero[]> {
    const url = `${env.api}/heroes/all`;
    const result = await this.http.post<Hero[]>(url, { id: 2 }, { headers }).toPromise();
    return result;
  }

  //  getHeroes() {
  //   const url = `localhost:3000/heroes/forReal`;
  //   this.http.get<Hero[]>(url, {headers}).subscribe(result => console.log(result));
  //   return [];
  // }
}
