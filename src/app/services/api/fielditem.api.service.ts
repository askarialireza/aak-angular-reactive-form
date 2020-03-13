import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../mocks/backend.mock';
import { FieldItem } from '../../models/field-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FielditemApiService {

  private apiUrl : string;

  constructor(private http: HttpClient) { 

    this.apiUrl = `${BASE_URL}/api/fielditems`;

   }

  deleteFieldItem(id: string) {

    let url = `${this.apiUrl}/${id}`;

    return this.http.delete<FieldItem>(url);

  }

  getFormFieldItems(formId:string) {

    let url = `${this.apiUrl}/forms/${formId}`;

    return this.http.get<FieldItem>(url).pipe();
    
  }

}
