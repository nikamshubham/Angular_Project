import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // alert("Welcome To Shoot Bubbles");
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }

  logoutclose() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }


}

