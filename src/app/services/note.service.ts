import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: string[] = []; // Array para armazenar notas

  constructor() {}

  addNote(note: string): void {
    this.notes.push(note); // Adiciona a nota ao array
  }

  getNotes(): string[] {
    return this.notes; // Retorna todas as notas
  }

  clearNotes(): void {
    this.notes = []; // Limpa todas as notas
  }
}