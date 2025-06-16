import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atributes-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './atributes-directives.html',
  styleUrl: './atributes-directives.css',
})
export class AtributesDirectives {
  textColor: string = 'text-success';
  isTextGreen: boolean = false;
  isTextOrange: boolean = false;

  userClass: string = '';

  styleColor: string = 'orange';

  customClass: { [key: string]: string } = {
    'color': 'magenta',
    'height': '100px',
    'width': '400px',
    'border': '2px solid black',
  }

  changeColor(color: string): void {
    this.textColor = color;
  }

  updateColor(color: string): void {
    this.styleColor = color;
  }
}
