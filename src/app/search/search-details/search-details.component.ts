import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from 'src/app/core/models/repository';
import { ApiService } from 'src/app/core/services/api.service';
import { Branch } from 'src/app/core/models/branch';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {
  name: string = null;
  owner: string = null;
  url: string = null;
  items: Branch[] = [];
  repository: Observable<Repository>;

  constructor(private _route: ActivatedRoute,private apiService: ApiService) { }

  ngOnInit() {
    this._route.queryParams

      .subscribe(params => {
        console.log(params);
     this.name = params.name;
     this.owner = params.owner;
     this.url = params.url;

      });
      this.apiService.getBranches(this.url).subscribe(r => {
        console.log('Result :%O', r);
        this.items = r ;
      });
      this.repository = this.apiService.getRepository(this.url);



  }
  onSelection($event){
    console.log($event.value);
  }

}
