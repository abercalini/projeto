import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'igreja';

  constructor(private router: Router) {}

  exibirMenu(): Boolean {

   if (this.router.url !== '/login' && this.router.url !== '/escolherigreja') {
      console.log(this.router.url);
      return true;
   }

  }

}
