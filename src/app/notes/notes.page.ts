import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Certifique-se de que o caminho está correto
import { NoteService } from '../services/note.service'; // Importar o serviço de notas

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notes: string[] = []; // Propriedade para armazenar notas
  note: string = ''; // Propriedade para armazenar a nota atual

  constructor(private router: Router, private authService: AuthService, private noteService: NoteService) {}

  ngOnInit() {
    // Carregar notas, se necessário
    this.notes = this.noteService.getNotes(); // Obter notas do serviço
  }

  addNote() {
    if (this.note) {
      this.noteService.addNote(this.note); // Adicionar nota através do serviço
      this.notes = this.noteService.getNotes(); // Atualizar a lista de notas
      this.note = ''; // Limpa o campo de entrada
    }
  }

  logout() {
    this.authService.logout(); // Chama o método de logout
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}