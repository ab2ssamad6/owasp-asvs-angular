import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MissingItem } from '../models/asvs.model';
import { ASVS_DATA } from '../data/asvs-data';

interface AnthropicResponse {
  content: Array<{ type: string; text?: string }>;
}

@Injectable({ providedIn: 'root' })
export class AiService {
  // In development, requests go through Angular's proxy → api.anthropic.com
  // The proxy (proxy.conf.json) handles the API key and CORS
  private readonly API_URL = '/api/anthropic/v1/messages';
  private readonly MODEL = 'claude-sonnet-4-20250514';

  constructor(private http: HttpClient) {}

  getRecommendations(
    missingItems: MissingItem[],
    totalItems: number,
    complianceScore: number
  ): Observable<string> {
    const grouped = ASVS_DATA.reduce((acc, cat) => {
      const catMissing = missingItems.filter(i => i.catId === cat.id);
      if (catMissing.length > 0) {
        acc[`${cat.id} - ${cat.title}`] = catMissing.map(i => ({
          id: i.id,
          desc: i.desc,
          level: `L${i.level}`
        }));
      }
      return acc;
    }, {} as Record<string, unknown>);

    const prompt = `You are an application security expert specializing in OWASP ASVS (Application Security Verification Standard).

The following OWASP ASVS requirements have NOT been implemented (${missingItems.length} missing out of ${totalItems} total, compliance score: ${complianceScore}%):

${JSON.stringify(grouped, null, 2)}

Provide structured, actionable security recommendations organized by category. For each category with missing items:
1. What needs to be implemented and why it matters
2. Concrete implementation steps (with code patterns or config examples where relevant)
3. Recommended tools, libraries, or frameworks
4. Quick wins vs long-term improvements

Format your response in Markdown with ## for category headers and ### for sub-sections.
Prioritize L1 (critical/opportunistic) items first. Be practical and developer-focused.`;

    // Content-Type is enough — the API key is injected by the proxy
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body = {
      model: this.MODEL,
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    };

    return this.http.post<AnthropicResponse>(this.API_URL, body, { headers }).pipe(
      map(res => res.content?.map(b => b.text || '').join('\n') || 'No recommendations generated.'),
      catchError(err => throwError(() => new Error(err.message || 'Failed to fetch recommendations')))
    );
  }
}
