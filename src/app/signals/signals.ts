import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals',
  imports: [CommonModule, FormsModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Signals {
  normalCounter: number = 0;
  // Normal Variable
  count: number = 0;
  // Signal Variable il faut utiliser le type WritableSignal et une méthode signal()
  counter: WritableSignal<number> = signal(0);

  constructor() {
    this.counter.set(5);
    setTimeout(() => {
      // this.normalCounter = 50;
      this.counter.set(50);
      console.log('Normal Counter Updated:', this.counter);
    }, 5000);

    effect(() => {
      console.log('The value of counter is :', this.counter());
    });
  }
  onIncement(): void {
    this.counter.update((value: number) => value + 1);
  }
  onDecrement(): void {
    this.counter.update((value: number) => value - 1);
  }
}
