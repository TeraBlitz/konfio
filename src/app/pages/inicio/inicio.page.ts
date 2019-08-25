import { Component, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

// @ViewChild(change-color, {static: false});
export class InicioPage implements OnInit {
  @ViewChild(IonIcon,{static:false}) active :any;

  constructor() { }

  once=true;
  public pages=
  [
    {
      title:'start',
      url:'start',
      icon:'home',
      class:'change-color'
    },
    {
      title:'product',
      url:'product',
      icon:'cube',
      class:''
    },
    {
      title:'historic',
      url:'historic',
      icon:'md-analytics',
      class:''
    },
    {
      title:'customers',
      url:'customers',
      icon:'contacts',
      class:''
    }
  ];
  ngOnInit() {
    console.log("Start");
    
  }

  onClick(event)
  {
    console.log("clicked",event);
    console.log("button",this.active);
    if(this.once)
    {
      this.active.el.className="md hydrated";
      this.once=false;
    }
    else{
      this.active.className="md hydrated";
    }
    event.target.className+=" change-color";
    this.active=event.target;
  }
  

}
