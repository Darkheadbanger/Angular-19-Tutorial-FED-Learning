import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngswitch-vs-switch',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngswitch-vs-switch.html',
  styleUrl: './structural-directive-ngswitch-vs-switch.css'
})
export class StructuralDirectiveNgswitchVsSwitch {
  grade: number = 0;

  set(numberGrade: number): void {
    this.grade = numberGrade;
  }
}
