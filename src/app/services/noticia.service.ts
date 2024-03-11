import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient, private environmentSrv: EnvironmentService) { }

  getNoticias(parametros: any): Observable<any> {
    const apiKey = "aed62a28b2184722837ebc54bf79608a";
    const category = parametros.categoria;
    const country = parametros.pais;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

    return this.http.get(url);
  }
}
