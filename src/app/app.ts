import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { AppDirectives } from './app-directives/app-directives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, DataBinding, AppDirectives],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular-19-Tutorial-FED-Learning';
}
