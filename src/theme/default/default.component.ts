import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spurt-root',
  templateUrl: './default.component.html',
})
export class DefaultComponent implements OnInit {
  title = 'Spurt Commerce';
  public mylanguage: string;

  constructor() {}

  ngOnInit() {}
}
