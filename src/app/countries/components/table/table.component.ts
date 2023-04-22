import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class TableComponent {
  @Input() countries: Country[] = [];
}
