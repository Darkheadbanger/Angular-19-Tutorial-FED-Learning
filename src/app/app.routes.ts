import { Routes } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { AppDirectives } from './app-directives/app-directives';
import { StructuralDirectiveNgifVsIf } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if';
import { LinkedSignal } from './linked-signal/linked-signal';
import { Signals } from './signals/signals';
import { AtributesDirectives } from './atributes-directives/atributes-directives';
import { StructuralDirectiveNgswitchVsSwitch } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch';
import { StructuralDirectiveNgForVsFor } from './structural-directive-ng-for-vs-for/structural-directive-ng-for-vs-for';
import { PageNotFound } from './page-not-found/page-not-found';
export const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: User },
  { path: 'data-binding', component: DataBinding },
  { path: 'app-directives', component: AppDirectives },
  {
    path: 'structural-directive-ngif-vs-if',
    component: StructuralDirectiveNgifVsIf,
  },
  {
    path: 'structural-directive-ng-for-vs-for',
    component: StructuralDirectiveNgForVsFor,
  },
  {
    path: 'structural-directive-ngswitch-vs-switch',
    component: StructuralDirectiveNgswitchVsSwitch,
  },
  { path: 'atributes-directives', component: AtributesDirectives },
  { path: 'signals', component: Signals },
  { path: 'linked-signal', component: LinkedSignal },
  { path: '**', component: PageNotFound },
];
