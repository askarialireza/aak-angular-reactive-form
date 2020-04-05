import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../mocks/backend.mock';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadApiService {

  private apiUrl: string;

  constructor(private http: HttpClient) {

    this.apiUrl = `${BASE_URL}/api/upload`;

  }


  UploadFile(formData: FormData): Observable<HttpEvent<Object>> {

    return this.http.post(this.apiUrl, formData, { reportProgress: true, observe: 'events' });
    
  }

}
