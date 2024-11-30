import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Nota {
  id: number;
  usuario_id: string;
  titulo:string;
  conteudo:string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: string[] = []; // Array para armazenar notas
  private api: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  readNotes(): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.api}notas/`); // Retorna um array de objetos Nota
  }

  addNote(note: Nota): Observable<Nota> {
    return this.http.post<Nota>(`${this.api}notas/`, note);
  }

  getNotes(): string[] {
    return this.notes; // Retorna todas as notas
  }

  clearNotes(): void {
    this.notes = []; // Limpa todas as notas
  }
}