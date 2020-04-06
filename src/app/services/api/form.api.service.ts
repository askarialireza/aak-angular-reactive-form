import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../mocks/backend.mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Interfaces from '../../exports/interface.namespace';

@Injectable({
  providedIn: 'root'
})
export class FormApiService implements Interfaces.DataManager {

  public apiUrl: string;

  constructor(private http: HttpClient) {

    this.apiUrl = `${BASE_URL}/api/forms`;

  }

  Get(id: string): Observable<Interfaces.Form> {
    return this.http.get<Interfaces.Form>(`${this.apiUrl}/${id}`);
  }

  Add(data: Interfaces.Form): Observable<Interfaces.Form> {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post<Interfaces.Form>(this.apiUrl, data, { headers });

  }

  Update(data: Interfaces.Form): Observable<Interfaces.Form> {
    throw new Error("Method not implemented.");
  }

  Delete(id: string): Observable<Interfaces.Form> {
    throw new Error("Method not implemented.");
  }

  getDefaultForm(): Observable<Interfaces.Form> {

    return this.http.get<Interfaces.Form>(this.apiUrl);

  }

  getForm(id: string) {
  }

  submitForm(data: Interfaces.Form) {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.put<Interfaces.Form>(this.apiUrl, data, { headers });

  }

  postForm(form: Interfaces.Form) {

  }


}
