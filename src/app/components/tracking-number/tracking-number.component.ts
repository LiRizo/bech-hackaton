import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tracking-number',
  templateUrl: './tracking-number.component.html',
  styleUrls: ['./tracking-number.component.css']
})
export class TrackingNumberComponent implements OnInit {

  constructor(private router: Router) { }

  navigateTo(value) {
    if (value) {
      console.log(value);
      this.router.navigate(['/estadosolicitud']);
    }
    return false;
  }


  ngOnInit(): void {
  }

}
