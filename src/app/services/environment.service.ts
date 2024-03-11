import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  private apiUrl : string = "";

  constructor(private http: HttpClient) { }

  async loadEnvironment(): Promise<any> {
    try {
          const envData = await this.http.get('/assets/entorno.env', { responseType: 'text' })
              .toPromise();
          const envLines = envData?.split('\n');
          const envVariables: { [key: string]: string; } = {};
          envLines?.forEach(line => {
              const [key_1, value] = line.split('=');
              envVariables[key_1.trim()] = value.trim();
          });
          this.apiUrl = envVariables['URL_VERCEL'];
      } catch (error) {
          console.error('Error loading environment:', error);
      }
  }

  getUrlVercel(): string {
    return this.apiUrl;
  }
}