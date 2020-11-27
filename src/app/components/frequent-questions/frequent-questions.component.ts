import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.css']
})
export class FrequentQuestionsComponent implements OnInit {

  panelOpenState = false;

  constructor(private router: Router) { }

  navigateTo() {
    // console.log('click');
    this.router.navigateByUrl('/preguntasfrecuentesall');
  }

  ngOnInit(): void {
  }

}
