import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioPage,
    children:[
      {
        path:'start',
        loadChildren:'./start/start.module#StartPageModule'
      },
      {
        path:'product',
        loadChildren:'./product/product.module#ProductPageModule'
      },
      {
        path:'historic',
        loadChildren:'./historic/historic.module#HistoricPageModule'
      }
    ]
  },
  {
    path:'',
    redirectTo:'inicio/start',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
