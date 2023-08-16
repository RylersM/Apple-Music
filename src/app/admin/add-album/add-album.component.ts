import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { AlbumService } from '../../album.service';
import { Album } from '../../album'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})

export class AddAlbumComponent implements OnInit {
  albumForm!: FormGroup

  constructor(private fb: FormBuilder, private aS: AlbumService,
    private router: Router) { }

  ngOnInit(): void {
    this.albumForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5)]],
      title: ['', [
        Validators.required,]],
      ref: ['', [
        Validators.required,
        Validators.pattern('\\w{5}'),
        // Validators.pattern('[a-zA-Z-0-9]{5}')
      ]],
      duration: ['', [
        Validators.required,
        Validators.max(900),
        Validators.pattern('[0-9]*')]],
      description: ['', [
        Validators.required]],
      tags: this.fb.array([
        this.fb.control('')
      ]),
      // tags: new FormArray([
      //   new FormControl('')
      // ]),
      status: 'off'
    });
  }
  get name() { return this.albumForm.get('name') }
  get ref() { return this.albumForm.get('ref') }
  get title() { return this.albumForm.get('title') }
  get duration() { return this.albumForm.get('duration') }
  get description() { return this.albumForm.get('description') }
  get tags() { return this.albumForm.get('tags') as FormArray }


  addtag() {
    this.tags.push(this.fb.control(''))
  }
  onSubmit() {
    //Envoie dans la BDD
    console.log(this.albumForm.value);

    //Rediriger sur la page d'acceuil
    this.router.navigate(['/admin'], {
      queryParams: {
        message: "Album ajouté avec succès",
      model: "text-davinci-002-render-sha"}
    })
  }
}