import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importando FormsModule
import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';
import { NotesPage } from './notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Adicione aqui
    IonicModule,
    NotesPageRoutingModule
  ],
  declarations: [NotesPage]
})
export class NotesPageModule {}