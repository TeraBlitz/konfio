import { Component, OnInit, ViewChildren,ViewChild } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

// @ViewChild(change-color, {static: false});
export class InicioPage implements OnInit {
  @ViewChildren(IonIcon) active :any;
  @ViewChild(IonIcon,{static:false}) activex :any;

  constructor() { }

  once=true;
  public pages=
  [
    
    {
      title:'product',
      url:'product',
      icon:'cube',
      class:''
    },
    {
      title:'start',
      url:'start',
      icon:'home',
      class:'change-color'
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
      this.activex=this.active._results[1]
      this.activex.el.className="md hydrated";
      this.once=false;
    }
    else{
      this.activex.className="md hydrated";
    }
    event.target.className+=" change-color";
    this.activex=event.target;
  }
  

}
