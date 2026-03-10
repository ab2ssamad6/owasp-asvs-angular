import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GoogleGenAI } from '@google/genai';
import { MissingItem } from '../models/asvs.model';
import { ASVS_DATA } from '../data/asvs-data';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AiService {
  private readonly client = new GoogleGenAI({ apiKey: environment.geminiApiKey });
  private readonly MODEL = 'gemini-2.5-flash';

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

    const request = this.client.models
      .generateContent({
        model: this.MODEL,
        contents: prompt,
      })
      .then(res => res.text ?? 'No recommendations generated.');

    return from(request).pipe(
      catchError(err =>
        throwError(() => new Error(err?.message || 'Gemini request failed'))
      )
    );
  }
}
