import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'shoe-store';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
