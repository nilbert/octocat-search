import { Injectable } from '@angular/core';
import { Repository } from '../models/repository';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Branch } from '../models/branch';
import { Commit } from '../models/commit';

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
  getBranches(uri: string): Observable<Branch[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.github.mercy-preview+json'
      })
    };
    return this.http.get<Branch[]>(uri + '/branches', httpOptions)
      .pipe(map(data => {
        console.log(' data : %O', data);
        return data;
      }))
      ;

  }
  getCommits(uri: string, branch: string): Observable<Commit[]> {
    const formatUri = uri + '/commits?sha=' + branch;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.github.mercy-preview+json'
      })
    };
    return this.http.get<Commit[]>(formatUri, httpOptions)
      .pipe(map(data => {
        console.log('commit : %O', data);
        return data;
      }))
      ;
  }

  getRepository(uri: string): Observable<Repository> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.github.mercy-preview+json'
      })
    };
    return this.http.get<Repository>(uri, httpOptions)
      .pipe(map(data => {
        console.log(' repository : %O', data);
        return data;
      }))
      ;
  }
}
