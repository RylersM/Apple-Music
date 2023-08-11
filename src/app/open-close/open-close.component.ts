import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Observable, Observer } from 'rxjs';
import { getCurrencySymbol } from '@angular/common';
import { fadeInAnimation } from '../animations-module';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openclose', [
      state('open', style({
        border: "2px solid orangered" ,
        backgroundColor: 'aqua',
      })),
      state('close', style({
        border: '2px solid brown',
        backgroundColor: 'yellowgreen',
      })),
  
      transition('open => close', animate('2s')),
      transition('close => open', animate('2s')),
    ]),
    fadeInAnimation
  ]
})
export class OpenCloseComponent implements OnInit {
ngOnInit(): void {
  //on s'abonne à l'observable
    this.myObservable.subscribe((album) =>{
      console.log(album);
    })
    
}

  /**
   * Observable: produit | objet | message qui sera diffusé
   * Observer: l'élément qui souscrit pour un produit |objet |message donné
   * new
   */
   myObservable = new Observable((observer: Observer<string>) =>{
    //le code à éxécuter quans on récupère la donnée
    // console.log(observer);
    setTimeout(() => {observer.next("album 1")}, 1000)
    setTimeout(() => {observer.next("album 2")}, 2000)
    setTimeout(() => {observer.next("album 3")}, 3000)
    setTimeout(() => {observer.next("album 4")}, 4000)
    setTimeout(() => {observer.next("album 5")}, 5000)
  })
  isOpen: boolean = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }
}
