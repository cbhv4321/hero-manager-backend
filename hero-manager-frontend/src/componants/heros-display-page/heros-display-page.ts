import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-heros-display-page',
  imports: [],
  templateUrl: './heros-display-page.html',
  styleUrl: './heros-display-page.scss',
})

@Injectable(
{
  providedIn: 'root'
})
export class HerosDisplayPage 
{
  heros: Hero[] = []
  
  constructor(
    private http: HttpClient, 
    private cdr: ChangeDetectorRef)
  {
    this.loadHeros()
  }

  loadHeros()
  {
    this.http.get<Hero[]>("http://localhost:5000/heroes")
    .subscribe(data =>
    {
      this.heros = data;
      this.cdr.detectChanges();
    });
  }
}

type Hero = 
{
  id: number
  name: string
  suitColor: string
  hasCape: boolean
  lastMission: string | null
  isRetired: boolean
}