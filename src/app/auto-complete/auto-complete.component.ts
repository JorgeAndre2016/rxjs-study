import { Component, OnInit } from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { pluck, map, debounceTime, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const input = fromEvent(document.querySelector('input'), 'input');
    const ul = document.querySelector('ul');

    const mostraResultado = res => {
      console.log(res);

      ul.innerHTML = res.map(e => `<li>${e}</li>`).join('');
    };

    const buscaPaisesNaApi = termo =>
      from(fetch(`https://restcountries.eu/rest/v2/name/${termo}?fullText=truentries.eu/rest/v2/all`))
        .pipe(
          // pluck('response', 'body'),
          // tap(r => console.log(r)),
          // map((resposta: any) => resposta.map(e => e.name))
        );

    input.pipe(
      debounceTime(300),
      pluck('target', 'value'),
      map((e: any) => e.trim()),
      switchMap(buscaPaisesNaApi)
      // catchError((err, source) => {
      //   console.log('eee');

      //   return source;
      // })
    )
    .subscribe((r:) => {
      console.log(r, 'mo ');

    });
  }

}
