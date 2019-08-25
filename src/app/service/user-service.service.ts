import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public user: any;
    public url: any;
    public loginEndpoint = 'https://us-central1-hk2019-250822.cloudfunctions.net/function-1';
    public logoutEndpoint = '/usuarios/logout';
    public userName: any;

  constructor(
    public http: HttpClient,
    ) {}


  login(username: string, password: string)
  {
    let user = { username, password };

    console.log(user);
    var req = new XMLHttpRequest()
    req.open('POST',this.loginEndpoint, false); 
    //req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //req.withCredentials = true;
    console.log( JSON.stringify(user))
    req.send( JSON.stringify(user));
    console.log(req);
    if (req.status === 200)
    {

      var x =JSON.parse(req.responseText);
      if(x.answer === 1)
      {
        this.userName = x.session.name;
          /*
        this.compraVentaService.getComprasAdd().subscribe(x=>console.log(x));
        this.compraVentaService.getComprasRemove().subscribe(x=>console.log(x));
        this.compraVentaService.getComprasChange().subscribe(x=>console.log(x));
           */
        return "true";
      }
      else
      {
        return "false";
      }
    }
  }

}
