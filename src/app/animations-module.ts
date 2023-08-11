import { style, transition, trigger, animate } from '@angular/animations';


export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
  style({opacity: 0}),
  animate('1000ms', style({opacity: 1})),
  ]),
  ]);