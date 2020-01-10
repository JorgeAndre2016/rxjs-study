import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.scss']
})
export class ExemplosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // const maioresAgrupadosPorGenero = () => ((source$) =>
//   source$.pipe(
//     filter((pessoa: any) => pessoa.idade >= 18),
//     reduce((a: any, b: any) => ({
//       ...a,
//       [b.sexo]: [...(a[b.sexo] || []), b]
//     }),
//     {})
//   )
// )

// const pessoas = [
//   { name: 'Jorge', sexo: 'Masculino', idade: 30 },
//   { name: 'Isabel', sexo: 'Feminino', idade: 26 },
//   { name: 'Kayky', sexo: 'Masculino', idade: 16 },
//   { name: 'Monique', sexo: 'Feminino', idade: 10 },
//   { name: 'Riquelme', sexo: 'Masculino', idade: 18 },
//   { name: 'Marina', sexo: 'Feminino', idade: 23 },
//   { name: 'Almir', sexo: 'Masculino', idade: 78 },
//   { name: 'Mariana', sexo: 'Feminino', idade: 35 },
//   { name: 'Kauany', sexo: 'Feminino', idade: 13 },
//   { name: 'Kelly', sexo: 'Feminino', idade: 21 },
//   { name: 'Karina', sexo: 'Feminino', idade: 19 },
//   { name: 'Adriano', sexo: 'Masculino', idade: 40 }
// ];

// from(pessoas)
//   .pipe(maioresAgrupadosPorGenero())
//   .subscribe((resp) => {
//     console.log(resp, 'aqui')
//   })

// Promise.resolve(1)
// 	.then((num) => console.log('promise', num));

// new Promise((resolve) => {
// 	resolve(1);
// }).then((num) => { console.log('promise 2', num);});

// const obs = Observable.create((observer) => {
//   let i = 0;

//   const interval = setInterval(() => {
//     console.log('1');
//     observer.next(i+1);
//   }, 1000);

//   return () => clearInterval(interval)
// }).pipe(
//   share()
// );

// const s1 = obs.subscribe((res) => {
//   console.log('res', res);
// })

// const s2 = obs.subscribe((res) => {
//   console.log('res2', res);
//   sub.next(res);
// })

// s1.add(s2);
// // s1.remove(s2);

// setTimeout(() => {
//   s1.unsubscribe();
// }, 5000)

// const sub = new Subject();

// const ss1 = sub.subscribe((res) => {
//   console.log('ss1', res);
// });

// const ss2 = sub.subscribe((res) => {
//   console.log('ss2', res);
// });

// // sub.next('sub env 1');
// // sub.next('sub env 2');
// // sub.error(new Error('error'));
// // sub.complete();

// const subh = new BehaviorSubject('0');
// subh.next('penultimo valor');
// subh.next('último valor');

// subh.subscribe((r) => {
//   console.log(r);
// });

// const replay = new ReplaySubject(3);

// replay.next(1);
// replay.next(12);
// replay.next(13);
// replay.next(14);
// replay.complete();

// replay.subscribe((r) => {
//   console.log(r, ' replay')
// });

// const ass = new AsyncSubject();

// ass.subscribe((r) => {
//   console.log(r, 'd')
// });

// ass.next('1');
// ass.next('2');
// ass.next('3');
// ass.complete(); // sem o complete nada será recebido no sub abaixo
// ass.subscribe((r) => {
//   console.log(r, ' assync')
// });


// interval(1000)
//   .pipe(
//     take(10)
//   )
//   .subscribe((r) => {
//     console.log(r, 'inter')
//   })

// range(12, 30)
//   .subscribe((r) => {
//     console.log(r)
//   })

// const btn = document.querySelector('button');

// fromEvent(btn, 'click')
//   .subscribe((r) => {
//     console.log(r)
//   })


}
