import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Repository } from '../core/models/repository';
import { Observable } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  loading = false;
  displaynoresult = false;
  results: Observable<Repository[]>;

  searchField: FormControl;

  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.searchField = new FormControl();

    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.apiService.getRepositories(term)),
      tap(_ => (this.loading = false))
    );
    this.results.subscribe(r => {
      console.log('Result :%O', r);
    });
  }

}
