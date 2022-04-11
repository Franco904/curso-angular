import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { filter, map, tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  readonly FIELDS = 'name,description,version,homepage';

  queryField = new FormControl();

  results$ = new Observable<any>();
  total: number = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges
      .pipe(
        map(value => value.trim()),
        filter(value => value.length > 1),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(value => {
          return this.httpClient.get(this.SEARCH_URL, {
            params: {
              search: value,
              fields: this.FIELDS,
            }
          })
        }),
        tap((res: any) => this.total = res.total),
        map((res: any) => res.results),
      );
  }

  onSearch() {
    let value = this.queryField.value;
    let fields = 'name,description,version,homepage';

    if (value && (value = value.trim()) !== '') {
      const params_ = {
        search: value,
        fields: fields,
      }

      // No JS puro seria o URLSearchParams
      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields);
      // .append para múltiplos valores

      this.results$ = this.httpClient.get(this.SEARCH_URL, { params })
        .pipe(
          tap((res: any) => this.total = res.total),
          map((res: any) => res.results),
        );
    }


  }
}
