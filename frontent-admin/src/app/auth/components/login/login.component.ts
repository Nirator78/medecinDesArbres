import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {ApiService} from "../../../services/api.service";
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
    isLogin: boolean = false;
    pasAdmin: boolean = false;
    pasUser: boolean = false;
    errorMessage: string= "";

    constructor(
        private _api: ApiService,
        private _auth: AuthService,
        private _router:Router,
        @Inject(DOCUMENT) private _document: Document
    ) {
      if (this._auth.isLogging()) {
        this._router.navigate(['home']);
      }
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        this.pasAdmin = false;
        this._api.postTypeRequest('user/login-admin', form.value).subscribe((res: any) => {
            if (res.status === 1) {
                this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
                this._auth.setDataInLocalStorage('token', res.token);
                this._router.navigate(['home']);
            }
            else if (res.status === 2) {
                this.pasAdmin = true;
            }
            else if (res.status === 0) {
                this.pasUser = true;
            }
        }, err => {
            this.errorMessage = err['error'].message;
        });
    }

    refresh() {

    }
}
