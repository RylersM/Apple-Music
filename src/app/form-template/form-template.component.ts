import { Component } from '@angular/core';
import { Music } from '../Music';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {

  genres = ['','RnB', 'Jazz', 'Rap', 'Pop', 'Zouk', 'Kizomba', 'AfroBeat', 'Amapiano', 'NaijaStyle', 'Slow'];
  musicModel = new Music('', '', this.genres[0]);
  submitted = false;


  onSubmit(form: any) {
    this.submitted = true;
    /**
     * Visité: touched | untouched
     * 
     * Changé: dirty | pristine
     * 
     * Valid: valid | invalid
     */

  }
}
