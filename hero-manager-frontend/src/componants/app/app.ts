import { Component } from '@angular/core';
import { HerosDisplayPage } from '../heros-display-page/heros-display-page';

@Component(
{
  selector: 'app-root',
  standalone: true,
  imports: [HerosDisplayPage],
  templateUrl: './app.html'
})
export class AppComponent
{
  
}