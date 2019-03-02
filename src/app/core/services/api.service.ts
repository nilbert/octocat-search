import { Injectable } from '@angular/core';
import { Repository } from '../models/repository';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRepositories(query: string): Observable<Repository[]> {
    const formatQuery = query.replace(' ', '+');

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.github.mercy-preview+json'
      })
    };
    return this.http.get<Repository[]>(`${environment.api_repo_url}?q=${formatQuery}`, httpOptions)
      .pipe(map(data => {
        console.log(' data : %O', data);
        let result = [];
        result = data['items'];
        return result;
      }))
      ;

  }
}
