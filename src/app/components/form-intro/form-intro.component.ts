import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-intro',
  templateUrl: './form-intro.component.html',
  styleUrls: ['./form-intro.component.css']
})
export class FormIntroComponent {

  constructor(private router: Router) { }

  navigateTo() {
    // console.log('click');
    this.router.navigateByUrl('/preguntasfrecuentes');

  }

}
