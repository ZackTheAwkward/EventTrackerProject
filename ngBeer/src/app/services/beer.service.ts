import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

private url = environment.baseUrl + 'api/beers'



  constructor(
    private http: HttpClient
  ) { }

index() {
  return this.http.get<Beer[]>(this.url + '?sorted=true')
  .pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('KABOOM');
    })
  );
}

create(beer: Beer){
  return this.http.post<Beer>(this.url, beer)
  .pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('KABOOM');
    })
  );
}
update(updateBeer: Beer){
  return this.http.put<Beer>(this.url + '/' + updateBeer.id, updateBeer).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('BeerService: error creating Beer');

    })
  )
}
destroy(id: number) {
  return this.http.delete<void>(this.url + '/' + id).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('BeerService: error retrieving Beer');

    })
  )
}



}
