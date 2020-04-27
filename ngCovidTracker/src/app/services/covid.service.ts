import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Covid } from '../model/covid';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  newCovid = new Covid();
  editCovid;
  covids =[];

  private url = environment.baseUrl + 'api/cases';

  constructor(
    private http : HttpClient
  ) { }

  index() {
    console.log("inside index in service");

    return this.http.get<Covid[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('CovidService.index(): Error');
      })

    );
  }

  handleError(error: any) {
    console.error('Something Broke');
    return throwError(error.json().error || 'Server Error');

  }

  create(newCovid: Covid) {

    return this.http.post<Covid>(this.url, newCovid).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('CovidService.create(): Error');
      })
    );
  }


  update(covid: Covid, covidId:number) {


    console.log("in update service " + covid.id + " " + covid.state);
    const httpOptions = {

      header: {
        'Content-type': 'application/json'
      }
    };
    return this.http.put<Covid>(`${this.url}/${covid.id}`, covid).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('CovidService.update(): Error');
      })
    );
  }


  delete(id: number) {
    console.log("covid" + id);

    const httpOptions = {

      header: {
        'Content-type': 'applicaiton/json'
      }
    };
    return this.http.delete<Covid>(this.url + '/' + id
    ).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('CovidService.delete(): Error');
      })
    );
  }

  show(id) {
    return this.http.get<Covid>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('CovidService.craete(): Error');
      })

    );
  }
}
