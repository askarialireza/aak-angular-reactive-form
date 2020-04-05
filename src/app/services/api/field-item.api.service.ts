import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../mocks/backend.mock';
import * as Interfaces from '../../exports/interface.namespace';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FieldItemApiService implements Interfaces.DataManager {

  constructor(private http: HttpClient) {

    this.apiUrl = `${BASE_URL}/api/fielditems`;

  }

  public apiUrl: string;

  Get(id: string): Observable<any> {
    throw new Error("Method not implemented.");
  }

  Add(data: any): Observable<any> {
    throw new Error("Method not implemented.");
  }

  Update(data: any): Observable<any> {
    throw new Error("Method not implemented.");
  }

  Delete(id: string): Observable<Interfaces.BaseFieldItem> {

    let url = `${this.apiUrl}/${id}`;

    return this.http.delete<Interfaces.BaseFieldItem>(url);

  }

  GetFieldItemsByForm(formId: string) : Observable<Interfaces.BaseFieldItem> {

    let url = `${this.apiUrl}/forms/${formId}`;

    return this.http.get<Interfaces.BaseFieldItem>(url).pipe();

  }

}
