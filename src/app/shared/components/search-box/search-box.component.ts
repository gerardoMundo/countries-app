import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {
  private debouncer = new Subject<string>();

  @Input()
  public placeholder = '';

  @Output()
  public capturedValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe(value => this.capturedValue.emit(value));
  }

  emitValue(term: string): void {
    this.capturedValue.emit(term);
  }

  onKeyPress(term: string) {
    this.debouncer.next(term);
  }
}
