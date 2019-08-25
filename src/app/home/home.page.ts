import { Component } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public menuCtrl: MenuController,
    public userService: UserServiceService,
    private router: Router,
    private comp: AppComponent,
    public toast: ToastController
  ) { }

 ngOnInit()
  {
    this.menuCtrl.enable(false);
  }

  login(form)
  {
    // console.log("hola esto es la form",form.value);

    var login = this.userService.login(form.value.username, form.value.password);
    if (login === 'true')
    {
      console.log("RIght");
      // this.router.navigate(['home']);

    }
    else if(login === 'false')
    {
      // console.log("login incorrecto");
      this.presentToastWithOptions("ahorita","Login incorrecto");
    }
    else
    {
      // console.log("server problems?");
      this.presentToastWithOptions("ahorita","Problemas de servidor");

    }
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async presentToastWithOptions(x,y) {
    // console.log(x)
    const toast = await this.toast.create({
      header:   y,
      // message: 'Error prueba',
      position: 'top',
      buttons: [
         {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
