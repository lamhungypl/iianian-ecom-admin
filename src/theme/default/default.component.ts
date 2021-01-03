import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iian-root',
  templateUrl: './default.component.html',
})
export class DefaultComponent implements OnInit {
  title = 'IIanian Commerce';
  public mylanguage: string;

  constructor() {}

  ngOnInit() {}
}
