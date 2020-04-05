import { Observable } from 'rxjs';

export interface DataManager {
    
    apiUrl: string;

    Get(id: string): Observable<any>;
    Add(data: any): Observable<any>;
    Update(data: any): Observable<any>;
    Delete(id: string): Observable<any>;
}