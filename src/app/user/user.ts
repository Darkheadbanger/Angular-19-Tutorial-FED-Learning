import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  title = 'User Component';
}
