import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.html',
  styleUrl: './structural-directive-ngif-vs-if.css',
})
export class StructuralDirectiveNgifVsIf {
  isChecked: boolean = false;
  isInputBox: boolean = true;
  input1: string = '';
  input2: string = '';

  onClick(): void {
    this.isChecked = !this.isChecked;
  }

  showField(): void {
    this.isInputBox = true;
  }
  hideField(): void {
    this.isInputBox = false;
  }
}
