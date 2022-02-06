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

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.clearStorage();
    this.router.navigate(['login']);
  }

}
