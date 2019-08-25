import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit {

  constructor() { }
  public pages=
  [
    {
      title:'start',
      url:'start'
    },
    {
      title:'product',
      url:'product'
    },
    {
      title:'historic',
      url:'historic'
    },
    {
      title:'customers',
      url:'customers'
    }
  ];
  ngOnInit() {
    console.log("Start")
  }

}
