import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../mocks/backend.mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Interfaces from '../../exports/interface.namespace';

@Injectable({
  providedIn: 'root'
})
export class FormApiService {

  private apiUrl: string;

  constructor(private http: HttpClient) {

    this.apiUrl = `${BASE_URL}/api/forms`;

  }

  getDefaultForm(): Observable<Interfaces.Form> {

    return this.http.get<Interfaces.Form>(this.apiUrl);

  }

  getForm(id: string) {

    return this.http.get<Interfaces.Form>(`${this.apiUrl}/${id}`);

  }

  submitForm(data: Interfaces.Form) {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.put<Interfaces.Form>(this.apiUrl, data, { headers });

  }

  postForm(form: Interfaces.Form) {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post<Interfaces.Form>(this.apiUrl, form, { headers });

  }


}
