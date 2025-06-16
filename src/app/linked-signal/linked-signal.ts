import { Component, computed, linkedSignal, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.css',
})
export class LinkedSignal {
  quantitySignal: WritableSignal<number> = signal(1);
  price: WritableSignal<number> = signal(10);
  total: Signal<number> = linkedSignal(() => {
    return this.quantitySignal() * this.price();
  });

  calculateTotal(): void {
    this.quantitySignal.set(2); // Simulate a change in quantity
  }
  
}
