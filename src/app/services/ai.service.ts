import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MissingItem } from '../models/asvs.model';
import { environment } from '../../environments/environment';

interface RecommendationsResponse {
  recommendations: string;
}

interface RecommendationsRequest {
  missingItems: MissingItem[];
  totalItems: number;
  complianceScore: number;
}

@Injectable({ providedIn: 'root' })
export class AiService {
  private readonly endpoint = `${environment.apiUrl}/api/recommendations`;

  constructor(private http: HttpClient) {}

  getRecommendations(missingItems: MissingItem[], totalItems: number, complianceScore: number): Observable<string> {
    const body: RecommendationsRequest = { missingItems, totalItems, complianceScore };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<RecommendationsResponse>(this.endpoint, body, { headers }).pipe(
      map((res) => res.recommendations || 'No recommendations generated.'),
      catchError((err) => {
        const msg = err?.error?.error || err?.message || 'Server request failed.';
        return throwError(() => new Error(msg));
      })
    );
  }
}
