import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { AppDirectives } from './app-directives/app-directives';
import { StructuralDirectiveNgifVsIf } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if';
import { StructuralDirectiveNgForVsFor } from './structural-directive-ng-for-vs-for/structural-directive-ng-for-vs-for';
import { StructuralDirectiveNgswitchVsSwitch } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch';
import { AtributesDirectives } from './atributes-directives/atributes-directives';
import { Signals } from './signals/signals';
import { LinkedSignal } from './linked-signal/linked-signal';
import { PageNotFound } from './page-not-found/page-not-found';

@Component({
  selector: 'app-root',
  standalone: true, // This is a standalone component
  imports: [
    RouterOutlet,
    RouterLink,
    User,
    DataBinding,
    AppDirectives,
    StructuralDirectiveNgifVsIf,
    StructuralDirectiveNgForVsFor,
    StructuralDirectiveNgswitchVsSwitch,
    AtributesDirectives,
    Signals,
    LinkedSignal,
    PageNotFound,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Angular-19-Tutorial-FED-Learning';
}
