import { Component } from '@angular/core';
import { from, Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, interval, range, fromEvent } from 'rxjs';
import { filter, reduce, share, take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RXJS-STUDY';
  optionActive = '';

  public setOption(event: any): void {
    this.optionActive = event.target.value;
  }
}
