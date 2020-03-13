import { Observable } from 'rxjs';
import { Form } from '../../models/form';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../mocks/backend.mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormApiService {

  private apiUrl : string;

  constructor(private http: HttpClient) { 

    this.apiUrl = `${BASE_URL}/api/forms`;

   }

  getDefaultForm(): Observable<Form> {

    return this.http.get<Form>(this.apiUrl);

  }

  submitForm(data: Form) {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post<Form>(this.apiUrl, data, { headers });
    
  }

  postForm(form:Form) {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post<Form>(this.apiUrl, form, { headers });   

  }


}
