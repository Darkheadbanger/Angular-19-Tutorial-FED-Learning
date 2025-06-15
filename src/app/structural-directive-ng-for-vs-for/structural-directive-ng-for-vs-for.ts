import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-for-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ng-for-vs-for.html',
  styleUrl: './structural-directive-ng-for-vs-for.css',
})
export class StructuralDirectiveNgForVsFor {
  employees: any[] = [
    { name: 'John', number: 101, email: 'john@example.com', departement: 'IT' },
    { name: 'Jane', number: 102, email: 'jane@example.com', departement: 'HR' },
    { name: 'Mike', number: 103, email: 'mike@example.com', departement: 'IT' },
  ];

  companyList: string[] = [
    'Google',
    'Microsoft',
    'Apple',
    'Amazon',
    'Facebook',
    'Tesla',
    'Netflix',
    'Adobe',
    'IBM',
    'Oracle',
  ];

  thrashBigFour: string[] = ['Metallica', 'Megadeth', 'Slayer', 'Anthrax'];
}
