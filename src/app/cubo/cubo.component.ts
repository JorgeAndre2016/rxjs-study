import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map, switchMap, takeUntil, filter, tap, skip, delay } from 'rxjs/operators';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss']
})
export class CuboComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const parentCard: any = document.querySelector('app-cubo');
    const card: any = document.querySelector('.card');
    const mouseDown$ = fromEvent(card, 'mousedown');
    const mouseUp$ = fromEvent(document, 'mouseup');
    const mouseMove$ = fromEvent(document, 'mousemove');
    const keyUp$ = fromEvent(document, 'keyup');


    const draAndDrop$ = mouseDown$.pipe(
      map((e: any) => ({
        x: e.clientX,
        y: e.clientY,
        target: {
          x: e.target.offsetLeft,
          y: e.target.offsetTop
        }
      })),
      switchMap(start => merge(
        mouseMove$.pipe(
          map((e: any) => ({
            x: e.clientX - start.x + start.target.x,
            y: e.clientY - start.y + start.target.y,
          })),
          takeUntil(mouseUp$)
        ),
        keyUp$.pipe(
          filter((e: any) => e.which === 32),
          tap((tecla) => {
            // insere antes do elemento card o card que foi clonado
            parentCard.insertBefore(card.cloneNode(true), card);
          })
        )
      ))
    );

    draAndDrop$.pipe(
      delay(150)
    ).subscribe((r: any) => {
      card.style.top = `${r.y}px`;
      card.style.left = `${r.x}px`;
      card.style.background = '#166';
    });
  }
}
