import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BulkApiService {

  configUrl = 'http://jsonplaceholder.typicode.com/users';
  configUrl1 = 'http://127.0.0.1:8000/api/login';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private extractData(res: Response) {
    const body = res;
    return body || { };
}

constructor(private http: HttpClient ) { }

getProducts(): Observable<any> {
  return this.http.get(this.configUrl).pipe(
    map(this.extractData));
}

addProduct (form): Observable<any> {
  console.log(form);
  return this.http.post<any>(this.configUrl1, form, this.httpOptions).pipe();
}


}
