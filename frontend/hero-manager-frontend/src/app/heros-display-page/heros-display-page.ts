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
  heros: {name: string, last_mission: number, id: number}[] =
  [
    {name: "electroboy", last_mission: Date.now(), id: 1},
    {name: "man with gun", last_mission: Date.now(), id: 2}
  ]  
}
