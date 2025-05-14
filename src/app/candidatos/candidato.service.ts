import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatosDetail } from './candidato-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private apiUrl: string = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/candidates.json';

constructor(private http: HttpClient) { }

  getPapas(): Observable<CandidatosDetail[]>{
  return this.http.get<CandidatosDetail[]>(this.apiUrl);
  }
  getPapa(id: string): Observable<CandidatosDetail[]>{
  return this.http.get<CandidatosDetail[]>(this.apiUrl + "/" + id);
}
}
