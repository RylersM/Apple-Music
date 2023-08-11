import { Component } from '@angular/core';
import { interval, Observable, take } from 'rxjs';
import { map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-music';
  receivedText: string | undefined;
  timerObservable!: Observable<string>;

  // !: opérateur de confiance | opérateur d'affirmation de non nullité,
  count!: string;




  constructor() { }

  ngOnInit(): void {
    this.timerObservable = interval(1000).pipe(
      take(3600 * 12),
      map(num => {
        const hours = Math.floor(num / 3600);
        const min = Math.floor(num / 60);
        return `Time: ${this.format(hours)} h ${this.format(min - hours * 60)} min ${this.format(num - min * 60)} sec`
      })
    );
    this.timerObservable.subscribe(time => {
      this.count = time;
    })
  }

  format(num: number) {
    return (num < 10 ? '0' : '') + num
  }

  parentReceive($event: string) {
    this.receivedText = $event;
  }
}
