import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-heros-display-page',
  imports: [],
  templateUrl: './heros-display-page.html',
  styleUrl: './heros-display-page.scss',
})

export class HerosDisplayPage 
{
  heros: Hero[] = []
  
  constructor()
  {
    this.loadHeros()
  }

  async loadHeros()
  {
    const result = await fetch("http://localhost:8080/heroes")
    this.heros = await result.json() as Hero[]
  }
}

type Hero = 
{
    id: number
    name: string
    suit_color: string
    has_cape: boolean
    last_mission: string | null
    is_retired: boolean
}