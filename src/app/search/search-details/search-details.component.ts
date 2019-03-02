import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from 'src/app/core/models/repository';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {
  name: string = null;
  owner: string = null;
  url: string = null;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams

      .subscribe(params => {
        console.log(params);
     this.name = params.name;
     this.owner = params.owner;
     this.url = params.url;

      });





  }

}
