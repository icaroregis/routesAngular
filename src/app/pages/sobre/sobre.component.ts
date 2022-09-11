import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    /* parametros passados pela rota */
    this.activatedRoute.params.subscribe({
      next: (response) =>
        console.log(response?.['id'], response?.['username'], response),
      error: (response) => console.log(response),
    });

    /* pegar parametros epla url */
    this.activatedRoute.queryParams.subscribe({
      next: (response) => console.log(response),
    });
  }
}
