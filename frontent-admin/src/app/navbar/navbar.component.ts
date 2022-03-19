import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faPowerOff = faPowerOff;
  userConnecter;
  isActive:boolean = true;

  constructor(private authService: AuthService, private router: Router ) {
    this.userConnecter = this.authService.getUserDetails();
    this.userConnecter = JSON.parse(this.userConnecter);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.clearStorage();
    this.router.navigate(['login']);
  }

}
