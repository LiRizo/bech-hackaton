import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow-up-requests',
  templateUrl: './follow-up-requests.component.html',
  styleUrls: ['./follow-up-requests.component.css']
})
export class FollowUpRequestsComponent implements OnInit {

  constructor(private router: Router) { }

  navigateTo() {
    // console.log('click');
    this.router.navigateByUrl('/seguimiento');
  }

  ngOnInit(): void {
  }

}
