import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent {
  searchByCapital(value: string): void {
    console.log(value);
  }
}
