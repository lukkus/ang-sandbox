import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-rwd',
  templateUrl: './rwd.component.html',
  styleUrls: ['./rwd.component.scss']
})
export class RwdComponent {
  data: any[] = [
    { id: 1, name: 'Element1' },
    { id: 2, name: 'Element2' },
    // Dodaj więcej danych według potrzeb
  ];

  term: string = '';
  searchTerm$ = new Subject<string>();
  selectedItems: any[] = [];  // Dodana właściwość selectedItems

  filteredData$ = this.searchTerm$.pipe(
    map((searchText: string) => this.filterData(searchText))
  );

  filterData(searchText: string): any[] {
    const searchLower = searchText.toLowerCase();
    return this.data.filter((item) =>
      item.name.toLowerCase().startsWith(searchLower)
    );
  }

  displayFn(value: any): string {
    return value && value.name ? value.name : '';
  }

  // Dodane zdarzenie obsługujące ngModelChange
  onModelChange(event: any): void {
    // Przypisanie wartości do selectedItems, jeśli potrzebne
    this.selectedItems = event;
  }
}
