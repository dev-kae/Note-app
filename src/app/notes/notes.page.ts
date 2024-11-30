import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Certifique-se de que o caminho está correto
import { NoteService } from '../services/note.service'; // Importar o serviço de notas
import { Nota } from './nota'; // Importar o modelo de nota

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notes: Nota[] = []; // Agora é um array de objetos Nota
  note: string = ''; // Propriedade para armazenar a nota atual

  constructor(private router: Router, private authService: AuthService, private noteService: NoteService) {}

  ngOnInit() {
    this.loadNotes(); // Carregar notas ao inicializar
  }

  loadNotes() {
    this.noteService.readNotes().subscribe((data: Nota[]) => {
      this.notes = data; // Atribui as notas recebidas ao array notes
      console.log(this.notes); // Exibe as notas no console (opcional)
    });
  }

  // addNote() {
  //   if (this.note) {
  //     this.noteService.addNote(this.note); // Adicionar nota através do serviço
  //     // this.notes = this.noteService.getNotes(); // Atualizar a lista de notas
  //     this.note = ''; // Limpa o campo de entrada
  //   }
  // }
  addNote() {
    if (this.note) {
      const newNote: Nota = {
        id: this.generateUniqueId(), // Gere um ID único
        usuario_id: '123',  // A ID do usuário logado
        titulo: 'Nova Nota', // Título da nova nota
        conteudo: this.note, // O conteúdo vem do campo de entrada
      };
  
      this.noteService.addNote(newNote).subscribe(
        (response) => {
          console.log('Nota adicionada:', response);
          this.notes.push(response);  // Adiciona a nova nota à lista localmente
          this.note = '';  // Limpa o campo de entrada
        },
        (error) => {
          console.error('Erro ao adicionar nota:', error);
        }
      );
    }
  }
  
  // Função para gerar um ID único (exemplo simples)
  private generateUniqueId(): number {
    return Math.floor(Math.random() * 10000); // Gera um ID aleatório
  }
  
  

  logout() {
    this.authService.logout(); // Chama o método de logout
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}
